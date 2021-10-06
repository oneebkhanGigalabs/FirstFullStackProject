import {
  ConflictException,
  Injectable,
  NotAcceptableException,
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
    if (!dto.email || !dto.password) {
      throw new NotAcceptableException('Email and/or password not provided');
    }
    let tokenValue = {};
    const user = await this.model
      .findOne()
      .where('email')
      .equals(dto.email)
      .exec()
      .catch((error) => {
        return error;
      })
      .then(async (user) => {
        await bcrypt
          .compare(dto.password, user.hashPassword)
          .then(async (hash) => {
            if (user && hash) {
              await this.jwtService
                .signAsync({
                  email: user.email,
                  name: user.username,
                  type: 'user',
                })
                .then((token) => {
                  console.log(token);
                  tokenValue = token;
                  //return { user };
                })
                .catch((er) => {
                  return er;
                });
            } else {
              throw new NotFoundException('Email or password incorrect');
            }
          });
      });
    return tokenValue;
  }

  async signupLocal(dto: userDto) {
    let tokenValue = {};
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
        tokenValue = token;
        if (dto.image) {
          await new this.model({
            username: dto.username,
            email: dto.email,
            hashPassword: hash,
            token: token,
            image: dto.image,
          }).save();
        } else {
          await new this.model({
            username: dto.username,
            email: dto.email,
            hashPassword: hash,
            token: token,
          }).save();
        }
      });
    return tokenValue;
  }

  async getUser(token: string) {
    return await this.model
      .findOne()
      .where('token')
      .equals(token)
      .exec()
      .catch((err) => {
        return err;
      })
      .then((user) => {
        if (!user) {
          throw new NotFoundException('User with this token not found');
        }
        return user;
      });
  }

  async validate(email: string) {
    const user = await this.model
      .findOne()
      .where('email')
      .equals(email)
      .exec()
      .catch((error) => {
        console.log(error);
        return { error: error };
      })
      .then((userInfo) => {
        return userInfo;
      });
    return new NotFoundException('No user with this email');
  }
}
