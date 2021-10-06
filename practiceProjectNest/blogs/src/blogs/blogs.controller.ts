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
import { commentsDto } from './dto/comments.dto';

@Controller('blogs')
export class BlogsController {
  constructor(private readonly service: BlogsService) {}

  // get all the blogs
  @Get()
  async findAll() {
    return await this.service.getAllBlogs();
  }

  // get the blog with the id
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.service.getBlog(id);
  }

  // create a blog
  @Post()
  async create(@Body() createBlogsDto: blogsDto) {
    return await this.service.createBlogs(createBlogsDto);
  }

  //update the blog with the id
  @Put(':id/:token')
  async update(
    @Param('id') id: string,
    @Body() updateBlogsDto: blogsDto,
    @Param('token') token: string,
  ) {
    return await this.service.updateBlog(id, updateBlogsDto, token);
  }

  //delete the blog with the id
  @Delete(':id/:token')
  async delete(@Param('id') id: string, @Param('token') token: string) {
    return await this.service.deleteBlog(id, token);
  }

  // ********** part 2 ********** //

  //favorite the blog with the id
  @Put(':id/favorite')
  async favoriteBlog(@Param('id') id: string, @Body() email: string) {
    return await this.service.favoriteBlog(id, email);
  }

  // ************ comments section ************ //

  //get all comments
  @Get(':id/comments')
  async getAllComments(@Param('id') id: string) {
    return await this.service.getAllComments(id);
  }

  //create a comment *prototype*
  @Post(':id/comments')
  async createComment(
    @Param('id') id: string,
    @Body() commentsDto: commentsDto,
  ) {
    return await this.service.createComment(id, commentsDto);
  }

  //reply to a comment
  @Post(':id/comments/:blogId')
  async replyToComment(
    @Param('id') id: string,
    @Param('blogId') blogId: string,
    @Body() commentsDto: commentsDto,
  ) {
    return await this.service.replyToComment(id, commentsDto, blogId);
  }

  //update a comment
  @Put(':id/comments/:blogId/:token')
  async updateComment(
    @Param('id') id: string,
    @Param('blogId') blogId: string,
    @Body() commentsDto: commentsDto,
    @Param('token') token: string,
  ) {
    return await this.service.updateComment(id, commentsDto, blogId, token);
  }

  //delete a comment
  @Delete(':id/comments/:blogId/:token')
  async deleteComment(
    @Param('id') id: string,
    @Param('blogId') blogId: string,
    @Param('token') token: string,
  ) {
    return await this.service.deleteComment(id, blogId, token);
  }
}
