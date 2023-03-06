/* eslint-disable no-console */
import Knex from 'knex';
import mysql2 from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

const connection = mysql2.createConnection({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME,
});

connection.connect(erro => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(`connection to db successfull!`);
    }
});

const knex = Knex({
    client: 'mysql2',
    connection: {
        user: connection.config.user,
        host: connection.config.host,
        port: connection.config.port,
        password: connection.config.password,
        database: connection.config.database,
    },
});

export { connection, knex };
