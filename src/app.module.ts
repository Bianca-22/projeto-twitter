import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TweetsModule } from './tweets/tweets.module';
import { LikeModule } from './likes/likes.module';

@Module({
  imports: [UsersModule, AuthModule, TweetsModule, LikeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
