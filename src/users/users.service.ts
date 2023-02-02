import { Injectable } from '@nestjs/common';
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
  async findByUsername(username: string): Promise<User | undefined> {
    const client = await pgClient();
    const users = await client.query(
      `SELECT *
      FROM user
      WHERE username = $1`,
      [username],
    );
    if (!users || !users.rowCount) {
      throw new Error('User not found');
    }
    return users.rows[0];
  }
}
