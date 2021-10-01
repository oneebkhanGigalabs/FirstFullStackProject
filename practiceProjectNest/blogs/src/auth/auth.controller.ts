import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
