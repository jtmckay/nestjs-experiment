import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('user', function (table) {
      table.increments('user_id');
      table.string('email', 255).notNullable();
      table.string('password', 255).notNullable();
    })
    .createTable('post', function (table) {
      table.increments('post_id');
      table.integer('user_id').notNullable();
      table.string('title', 1000).notNullable();
      table.string('content', 1000).notNullable();

      table.foreign('user_id').references('user_id').inTable('user');
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('post').dropTable('user');
}
