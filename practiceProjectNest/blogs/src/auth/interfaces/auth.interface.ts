export interface Auth extends Document {
  email: string;
  username: string;
  token: string;
  hashPassword: string;
  image: string;
}
