import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';
import { AuthResponse, LoginDto } from './auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private db: PrismaService, private jwt: JwtService) {}

  async login(data: LoginDto): Promise<AuthResponse> {
    const { username, password } = data;

    const user = await this.db.user.findUnique({
      where: { username },
    });

    if (!user) {
      throw new NotFoundException();
    }
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new UnauthorizedException('invalid-credentials');
    }

    return {
      token: this.jwt.sign({ username }),
      user,
    };
  }
}
