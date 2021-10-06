import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/interfaces/auth.interface';
import { blogsDto } from './dto/blogs.dto';
import { commentsDto } from './dto/comments.dto';
import { Blogs } from './interfaces/blogs.interfaces';

@Injectable()
export class BlogsService {
  constructor(
    @InjectModel('Blogs') private model: Model<Blogs>,
    @InjectModel('Auth') private authModel: Model<Auth>,
  ) {}

  async getAllBlogs() {
    return await this.model.find().exec();
  }

  async getBlog(id: string) {
    return await this.model
      .findById(id)
      .exec()
      .catch((e) => {
        throw new BadRequestException(
          "Blog with id '" + id + "' does not exist",
        );
      });
  }

  async createBlogs(blogsDto: blogsDto) {
    return await new this.model({ ...blogsDto }).save();
  }

  async updateBlog(id: string, updateBlogsDto: blogsDto, token: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((e) => {
        throw new BadRequestException(e);
      })
      .then(async (blog) => {
        if (!blog) {
          throw new BadRequestException(
            "Blog with id '" + id + "' does not exist",
          );
        }
        if (blog.token != token) {
          throw new UnauthorizedException(
            "You can't edit this blog because you did not create it",
          );
        }
        return await this.model
          .findByIdAndUpdate(id, updateBlogsDto)
          .exec()
          .catch((err) => {
            return err;
          });
      });
  }

  async deleteBlog(id: string, token: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((e) => {
        throw new BadRequestException(e);
      })
      .then(async (blog) => {
        if (!blog) {
          throw new BadRequestException(
            "Blog with id '" + id + "' does not exist",
          );
        }
        if (blog.token != token) {
          throw new UnauthorizedException(
            "You can't delete this blog because you did not create it",
          );
        }
        return await this.model
          .findByIdAndDelete(id)
          .exec()
          .catch((err) => {
            return err;
          });
      });
  }

  // ***** favorite a blog (different for every user) **** //

  async favoriteBlog(id: string, email: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((err) => {
        throw new NotFoundException(err);
      })
      .then(async (blog) => {
        if (!blog) {
          throw new NotFoundException('Blog not found');
        }
        await this.authModel
          .findOne()
          .where('email')
          .equals(email['email'])
          .exec()
          .catch((err) => {
            throw new NotFoundException(err);
          })
          .then(async (user: Auth) => {
            if (!user) {
              throw new NotFoundException('User not found');
            }
            var u = user;
            if (u.favoriteBlogs.includes(id)) {
              u.favoriteBlogs.splice(u.favoriteBlogs.indexOf(id), 1);
            } else {
              u.favoriteBlogs.push(id);
            }
            await this.authModel.findOneAndUpdate(
              { email: email['email'] },
              { $set: { favoriteBlogs: u.favoriteBlogs } },
            );
          });
      });
  }

  // ****** Comment section *******//

  async getAllComments(id: string) {
    var c;
    await this.model
      .findById(id)
      .exec()
      .catch((err1) => {
        c = err1;
      })
      .then((blog) => {
        if (blog) {
          c = { ...blog.comment };
          return { out: blog.comment };
        } else {
          throw new NotFoundException('Blog not found');
        }
      });
    return c;
  }

  async createComment(id: string, commentsDto: commentsDto) {
    await this.model
      .findByIdAndUpdate(id, {
        $push: {
          comment: {
            ...commentsDto,
            level: 0,
          },
        },
      })
      .exec()
      .catch((err) => {
        return err;
      });
    return 'Base comment created successfully';
  }

  async replyToComment(id: string, commentsDto: commentsDto, blogID: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((err) => {
        return err;
      })
      .then((blog) => {
        traverseCommentsReply(blog.comment, blogID, commentsDto).then(
          async (res) => {
            //console.log(res);
            await this.model.findByIdAndUpdate(id, { comment: res });
          },
        );
      });
  }

  async deleteComment(id: string, blogID: string, token: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((err) => {
        return err;
      })
      .then((blog) => {
        traverseAndDeleteElement(blog.comment, blogID, token).then(
          async (res) => {
            if (res) {
              await this.model.findByIdAndUpdate(id, { comment: res });
            }
          },
        );
      });
  }

  async updateComment(
    id: string,
    commentsDto: commentsDto,
    blogID: string,
    token: string,
  ) {
    await this.model
      .findById(id)
      .exec()
      .catch((err) => {
        return err;
      })
      .then((blog) => {
        traverseAndUpdateElement(blog.comment, blogID, commentsDto, token).then(
          async (res) => {
            //console.log(res);
            if (res) {
              await this.model.findByIdAndUpdate(id, { comment: res });
            }
          },
        );
      });
  }
}

// function to traverse through the nested comments
// takes the comments list of objects and will map
// through the array and their inner sub documents
// to find the sub document with id provided
// there are two types of traversing funtcion

// 1. Will traverse through array and add the data
//    then will return the whole comment array
async function traverseCommentsReply(
  objList: any[],
  id: string,
  commentsDto: any,
) {
  for (var index = 0; index < objList.length; index++) {
    if (objList[index]._id.toString() === id) {
      objList[index].comments.push({
        ...commentsDto,
        level: objList[index].level + 1,
      });
      break;
    }
    if (objList[index].comments.length > 0) {
      traverseCommentsReply(objList[index].comments, id, commentsDto);
    }
  }
  return objList;
}

// 2. will traverse through the array and delete
//    the element with the matching id
//    if element is not found or token does not match user
//    an exception will be thrown
async function traverseAndDeleteElement(
  objList: any[],
  id: string,
  token: string,
) {
  let c = '';
  for (var index = 0; index < objList.length; index++) {
    if (objList[index]._id.toString() === id) {
      if (objList[index].token != token) {
        c = 'token';
        break;
      }
      c = 'found';
      objList.splice(index, 1);
      break;
    }
    if (objList[index].comments.length > 0) {
      traverseAndDeleteElement(objList[index].comments, id, token);
    }
  }
  switch (c) {
    case 'token':
      throw new ForbiddenException('Token does not match');
    case 'found':
      return objList;
    default:
      throw new NotFoundException('No blog with id found');
  }
}

// 3. will traverse through the array and update
//    the element with the matching id
//    if element is not found or token does not match user
//    an exception will be thrown
async function traverseAndUpdateElement(
  objList: any[],
  id: string,
  commentsDto: any,
  token: string,
) {
  let c = '';
  for (var index = 0; index < objList.length; index++) {
    if (objList[index]._id.toString() === id) {
      if (objList[index].token != token) {
        c = 'token';
        break;
      }
      c = 'found';
      objList[index].comment = commentsDto.comment;
      break;
    }
    if (objList[index].comments.length > 0) {
      traverseAndUpdateElement(objList[index].comments, id, commentsDto, token);
    }
  }
  switch (c) {
    case 'token':
      throw new ForbiddenException('Token does not match');
    case 'found':
      return objList;
    default:
      throw new NotFoundException('No blog with id found');
  }
}
