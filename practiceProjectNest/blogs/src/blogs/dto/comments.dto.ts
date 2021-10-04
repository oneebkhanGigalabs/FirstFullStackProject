export class commentsDto {
  author: string;
  comment: string;
  comments: [{ commentsDto: commentsDto | null | '' }];
}
