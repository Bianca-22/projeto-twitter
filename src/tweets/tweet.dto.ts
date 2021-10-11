import { IsString, Length } from 'class-validator';

export class CreateTweetDto {
  @IsString()
  @Length(0, 255)
  text: string;

  @IsString()
  image: string;
}