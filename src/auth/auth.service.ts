import { Injectable } from '@nestjs/common';
import { hashPassword } from 'src/user/security';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password_hash === hashPassword(pass)) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }
}
