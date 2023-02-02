import { Injectable } from '@nestjs/common';
import { pbkdf2Sync } from 'pbkdf2';
import { pgClient } from '../db/client';

// This should be a real class/interface representing a user entity
export type User = {
  user_id: number;
  username: string;
  email: string;
  password_hash: string;
};

@Injectable()
export class UsersService {
  async register(user: { username: string; email: string; password: string }) {
    const client = await pgClient();
    await client.query(
      `insert into public.user (username, email, password_hash) values ($1, $2, $3)`,
      [user.username, user.email, this.hashPassword(user.password)],
    );
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const client = await pgClient();
    const users = await client.query<User>(
      `SELECT *
      FROM public.user
      WHERE email = $1`,
      [email],
    );
    if (!users || !users.rowCount) {
      throw new Error('User not found');
    }
    return users.rows[0];
  }

  hashPassword(password: string): string {
    return pbkdf2Sync(password, 'some-good-salt', 100, 100).toString('base64');
  }

  validatePassword(user: User, password: string) {
    return user.password_hash === this.hashPassword(password);
  }
}
