import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('todolist', table => {
        table.increments('id').primary();
        table.dateTime('date').notNullable();
        table.string('description').notNullable();
        table.boolean('performed').notNullable();
        table.string('user_id').references('id').inTable('users').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('todolist');
}
