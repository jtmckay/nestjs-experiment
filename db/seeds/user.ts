import { Knex } from 'knex';
import { hashPassword } from '../../src/user/security';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del();

  // Inserts seed entries
  await knex('user').insert([
    {
      user_id: 1,
      username: 'test1',
      email: 'test1@example.com',
      password_hash: hashPassword('test'),
    },
    {
      user_id: 2,
      username: 'test2',
      email: 'test2@example.com',
      password_hash: hashPassword('test'),
    },
    {
      user_id: 3,
      username: 'test3',
      email: 'test3@example.com',
      password_hash: hashPassword('test'),
    },
  ]);
}
