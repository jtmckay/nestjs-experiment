import { Client } from 'pg';

export const pgConfig = {
  database: 'app_db',
  port: 5432,
  user: 'postgres',
  password: 'password',
};

const client = new Client(pgConfig);
const clientConnection = client.connect();

export async function pgClient() {
  await clientConnection;
  return client;
}
