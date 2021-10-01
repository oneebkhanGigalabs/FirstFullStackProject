import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { blogsDto } from './dto/blogs.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  @Get()
  async findAll() {
    return await this.service.getAllBlogs();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.getBlog(id);
  }

  @Post()
  async create(@Body() createBlogsDto: blogsDto) {
    return await this.service.createBlogs(createBlogsDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBlogsDto: blogsDto) {
    return await this.service.updateBlog(id, updateBlogsDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.service.deleteBlog(id);
  }

  @Put(':id/favorite')
  async favoriteBlog(@Param('id') id: string, @Body() email: string) {
    return await this.service.favoriteBlog(id, email);
  }
}
