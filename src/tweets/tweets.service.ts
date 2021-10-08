import { Prisma, Tweet } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TweetsService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.TweetCreateInput): Promise<Tweet> {
    const tweet = await this.db.tweet.create({ data });

    return tweet;
  }

  async delete(where: Prisma.TweetWhereUniqueInput): Promise<Tweet> {
    const tweet = await this.db.tweet.delete({ where });

    return tweet;
  }
}
