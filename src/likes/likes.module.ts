import { Module } from '@nestjs/common';
import { LikeService } from './likes.service';
import { LikeController } from './likes.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [LikeService, PrismaService],
  controllers: [LikeController],
})
export class LikeModule {}
