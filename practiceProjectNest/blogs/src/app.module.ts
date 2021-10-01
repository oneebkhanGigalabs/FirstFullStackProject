import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from './auth/strategy/jwt.strategy';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    BlogsModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRoot(
      'mongodb+srv://' +
        process.env.DB_USER +
        ':' +
        process.env.DB_PASSWORD +
        '@cluster0.okbhp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
