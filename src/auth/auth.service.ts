import { Injectable } from '@nestjs/common';
import { pbkdf2Sync } from 'pbkdf2';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && user.password_hash === this.hashPassword(pass)) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }

  hashPassword(password: string): string {
    return pbkdf2Sync(password, 'some-good-salt', 100, 100).toString('base64');
  }
}
