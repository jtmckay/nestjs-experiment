import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && this.usersService.validatePassword(user, pass)) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }
}
