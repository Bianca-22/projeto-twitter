import { User } from '.prisma/client';
import { IsString, Length } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(255)
  title: string;

  @IsString()
  image: string;
}