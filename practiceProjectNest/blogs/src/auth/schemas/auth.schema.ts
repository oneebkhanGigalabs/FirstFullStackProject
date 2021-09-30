import * as mongoose from 'mongoose';
import { defaultImage } from '../../blogs/schemas/defaltImage';

export const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: defaultImage,
    },
    hashPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
