export interface Comments extends Document {
  author: string;
  comment: string;
  level: number;
  token: string;
  comments: [Comments];
}
