import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
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
    return await this.model.findById(id).exec();
  }

  async createBlogs(blogsDto: blogsDto) {
    return await new this.model({ ...blogsDto, createdAt: new Date() }).save();
  }

  async updateBlog(id: string, updateBlogsDto: blogsDto) {
    return await this.model.findByIdAndUpdate(id, updateBlogsDto).exec();
  }

  async deleteBlog(id: string) {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
