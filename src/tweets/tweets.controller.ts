import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { Tweet } from '.prisma/client';
import { CreateTweetDto } from './tweet.dto';
import { TweetsService } from './tweets.service';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('tweets')
export class TweetsController {
  constructor(private service: TweetsService) {}

  @Post()
  create(@Body() data: CreateTweetDto): Promise<Tweet> {
    return this.service.create(data);
  }
}
