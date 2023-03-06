import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('refreshtoken', table => {
        table.string('id').primary();
        table.integer('expiresIn').notNullable();
        table.string('user_id').references('id').inTable('users').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('refreshtoken');
}
