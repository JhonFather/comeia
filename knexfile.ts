/* eslint-disable prettier/prettier */
import { connection } from './src/Database/connection';

const knexConfig = {
    client: 'mysql2',
    connection: {
        user: connection.config.user,
        host: connection.config.host,
        port: connection.config.port,
        password: connection.config.password,
        database: connection.config.database,
    },
    migrations: {
        directory: './src/Database/Migrations',
    },
    seeds: {
        directory: './src/Database/Seeds',
    },
    useNullAsDefault: true,
};

export default knexConfig;
