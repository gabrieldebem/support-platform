import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from 'src/users/users.repository';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userRepository.find({ username });
    const hashMatches = !user ? false : await bcrypt.compare(password, user?.password);

    if (!hashMatches) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, id: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
