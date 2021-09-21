import { Module, Post } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogsController } from './blogs.controller';
import { BlogsService } from './blogs.service';
import { BlogsSchema } from './schemas/blogs.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Blogs', schema: BlogsSchema }]),
  ],
  controllers: [BlogsController],
  providers: [BlogsService],
})
export class BlogsModule {}
