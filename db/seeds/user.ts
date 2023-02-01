import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('user').del();

  // Inserts seed entries
  await knex('user').insert([
    { email: 'test1@example.com', password: '' },
    { email: 'test2@example.com', password: '' },
    { email: 'test3@example.com', password: '' },
  ]);
}
