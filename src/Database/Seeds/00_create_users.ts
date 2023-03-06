import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('users').insert([
        {
            id: 'f7221b9f-17b1-4047-be2c-9d0cfca4c7b2',
            email: 'jao@gmail.com',
            password:
                '$2b$10$1ScpT/YvgdVJVuzAv43IVubilbaIjVgvbddpYqi082CAWnXam4UNm',
        },
        {
            id: 'b432e408-36e7-46f6-afe3-6634be87457f',
            email: 'comeia@gmail.com',
            password:
                '$2b$10$Kwi43ZS7bM3DcHmXeP5LO.nsF0fluetrT5EEu8Fz0xbMRIlbdQBfi',
        },
        {
            id: '6972dec2-b3c2-4f6c-8137-eec64e8d36cc',
            email: 'jaonacomeia@gmail.com',
            password:
                '$2b$10$a5gQ1m/AZVpvXtxF.xohjetynLlc64TJO/rvFvybBVpYX00QZQ2cO',
        },
    ]);
}
