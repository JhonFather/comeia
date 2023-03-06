import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('todolist').insert([
        {
            id: 1,
            date: '2026-02-24T23:17:43.349356+00:00',
            description: 'desafio tecnico',
            performed: true,
            user_id: 'f7221b9f-17b1-4047-be2c-9d0cfca4c7b2',
        },
        {
            id: 2,
            date: '2026-02-24T23:17:43.349356+00:00',
            description: 'ser contratado',
            performed: false,
            user_id: 'f7221b9f-17b1-4047-be2c-9d0cfca4c7b2',
        },
        {
            id: 3,
            date: '2026-02-24T23:17:43.349356+00:00',
            description: 'contratar João Vinícius',
            performed: false,
            user_id: 'b432e408-36e7-46f6-afe3-6634be87457f',
        },
    ]);
}
