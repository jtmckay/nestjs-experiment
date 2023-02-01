import { Client } from 'pg';

export const pgConfig = {
  database: 'app_db',
  port: 5432,
  user: 'postgres',
  password: 'password',
};

const client = new Client(pgConfig);

export async function pgClient() {
  await client.connect();
  return client;
}
