import { IsString, Length } from 'class-validator';
import { User } from '.prisma/client';

export class LoginDto {
  @IsString()
  @Length(3, 30)
  username: string;

  @IsString()
  @Length(3, 30)
  password: string;
}

export class AuthResponse {
  token: string;
  user: User;
}
