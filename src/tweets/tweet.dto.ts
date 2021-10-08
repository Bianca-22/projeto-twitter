import { IsString, Length } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(0, 255)
  title: string;

  @IsString()
  image: string;
}