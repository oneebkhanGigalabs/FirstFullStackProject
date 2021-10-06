import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { signInDto, userDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async signinLocal(@Body() signinDto: signInDto) {
    return await this.authService.signinLocal(signinDto);
  }

  @Post('signup')
  async signupLocal(@Body() userDto: userDto) {
    return await this.authService.signupLocal(userDto);
  }

  @Get('getUser/:token')
  async getUser(@Param('token') token: string) {
    return await this.authService.getUser(token);
  }
}
