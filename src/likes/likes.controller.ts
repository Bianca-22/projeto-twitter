import {
  Body,
  Controller,
  Post,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
  ParseIntPipe,
  UsePipes,
  Req,
} from '@nestjs/common';
import { Like } from '.prisma/client';
import { LikeService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateLikeDto } from './dto/like.dto';

@Controller('like')
export class LikeController {
  constructor(private service: LikeService) {}

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Post('like')
  async create(@Body() like: CreateLikeDto, @Req() Req): Promise<Like> {
    const user = Req.user.id;

    return this.service.create(like, user);
  }

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(ValidationPipe)
  @Delete('/delete/:id')
  async delete(
    @Param('id', ParseIntPipe) id: number,
    @Req() Req,
  ): Promise<Like> {
    const user = Req.user.id;

    return this.service.deleteOneLike(id, user);
  }
}
