import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { Auth } from 'src/auth/interfaces/auth.interface';
import { blogsDto } from './dto/blogs.dto';
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

  async updateBlog(id: string, updateBlogsDto: blogsDto) {
    this.model
      .findByIdAndUpdate(id, updateBlogsDto)
      .exec()
      .catch((e) => {
        throw new BadRequestException(
          "Blog with id '" + id + "' does not exist",
        );
      });
  }

  async deleteBlog(id: string) {
    return await this.model
      .findByIdAndDelete(id)
      .exec()
      .catch((e) => {
        throw new NotFoundException("Blog with id '" + id + "' does not exist");
      });
  }

  async favoriteBlog(id: string, email: string) {
    await this.model
      .findById(id)
      .exec()
      .catch((err) => {
        throw new NotFoundException('Blog with id:' + id + ' not found');
      })
      .then(async (blog) => {
        await this.authModel
          .findOne()
          .where('email')
          .equals(email['email'])
          .exec()
          .catch((err) => {
            throw new NotFoundException(
              'User with email: ' + email['email'] + ' not found',
            );
          })
          .then(async (user: Auth) => {
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
}
