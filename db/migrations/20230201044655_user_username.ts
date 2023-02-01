import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable('user', function (table) {
    table.string('username').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.alterTable('user', function (table) {
    table.dropColumn('username');
  });
}
