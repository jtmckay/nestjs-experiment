import type { Knex } from 'knex';
import { pgConfig } from '../src/db/client';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: pgConfig,
  },
};

module.exports = config;
