import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { User } from '.prisma/client';
import { CreateUserDto } from './user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}

  @Post()
  create(@Body() data: CreateUserDto): Promise<User> {
    return this.service.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':username')
  findUnique(@Param('username') username: string): Promise<User> {
    return this.service.findOne(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':username')
  delete(@Param('username') username: string): Promise<User> {
    return this.service.delete(username);
  }
}
