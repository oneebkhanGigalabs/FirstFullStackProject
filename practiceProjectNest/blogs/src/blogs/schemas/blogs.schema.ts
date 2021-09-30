import * as mongoose from 'mongoose';
import { defaultImage } from './defaltImage';

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
    image: {
      type: String,
      required: true,
      default: defaultImage,
    },
  },
  { timestamps: true },
);
