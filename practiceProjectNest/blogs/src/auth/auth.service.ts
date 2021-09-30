import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth } from './interfaces/auth.interface';
import { signInDto, userDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private model: Model<Auth>,
    private jwtService: JwtService,
  ) {}

  // async getUser(token: string) {
  //   const user = await this.model.findOne((user) => user.token === token);
  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }
  //   return user;
  // }

  async signinLocal(dto: signInDto) {
    const user = await this.model.findOne((user) => user.email === dto.email);
    if (user && bcrypt.compare(dto.password, user.hashPassword)) {
      return {
        token: this.jwtService.signAsync({
          email: user.email,
          name: user.username,
          type: 'user',
        }),
        status: 200,
      };
    }
    throw new NotFoundException('Email or password incorrect');
  }

  async signupLocal(dto: userDto) {
    const user = await this.model
      .findOne()
      .where('email')
      .equals(dto.email)
      .exec()
      .catch((error) => {
        console.log();
        return { error: error };
      })
      .then(async (user) => {
        if (user) {
          return new ConflictException('User already registered');
        }
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(dto.password, salt);
        const token = await this.jwtService.signAsync({
          email: dto.email,
          username: dto.username,
          type: 'user',
        });
        console.log(hash);
        console.log(token);
        return await new this.model({
          username: dto.username,
          email: dto.email,
          hashPassword: hash,
          token: token,
          image: dto.image,
        }).save();
      });
  }

  async validateUser(email: string, password: string) {
    const user = await this.model
      .findOne()
      .where('email')
      .equals(email)
      .exec()
      .catch((error) => {
        console.log();
        return { error: error };
      })
      .then((userInfo) => {
        console.log(userInfo);
        return userInfo;
      });
    return user;
  }
}
