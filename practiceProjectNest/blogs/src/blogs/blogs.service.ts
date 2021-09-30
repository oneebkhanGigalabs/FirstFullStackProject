import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { response } from 'express';
import { Model } from 'mongoose';
import { blogsDto } from './dto/blogs.dto';
import { Blogs } from './interfaces/blogs.interfaces';

@Injectable()
export class BlogsService {
  constructor(@InjectModel('Blogs') private model: Model<Blogs>) {}

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
        throw new BadRequestException(
          "Blog with id '" + id + "' does not exist",
        );
      });
  }
}
