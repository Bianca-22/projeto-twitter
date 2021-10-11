import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(8, 30)
  password: string;

  @IsString()
  @Length(2, 50)
  displayName: string;

  @IsString()
  image: string;

  @IsEmail()
  email: string;

  @IsString()
  @Length(0, 100)
  bio: string;

  @IsString()
  @Length(1, 10)
  birthDate: string;
}
