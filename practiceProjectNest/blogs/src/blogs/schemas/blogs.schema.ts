import * as mongoose from 'mongoose';
import { defaultImage } from './defaltImage';

export const CommentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    //comments: [this],
    level: {
      type: Number,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

CommentSchema.add({ comments: [CommentSchema] });

export const BlogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: defaultImage,
    },
    comments: [CommentSchema],
  },
  { timestamps: true },
);
