import { Comments } from './comments.interfaces';

export interface Blogs extends Document {
  title: string;
  description: string;
  author: string;
  image: string;
  token: string;
  comment: [Comments];
}
