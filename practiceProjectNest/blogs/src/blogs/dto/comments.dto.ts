export class commentsDto {
  author: string;
  comment: string;
  token: string;
  comments: [{ commentsDto: commentsDto | null | '' }];
}
