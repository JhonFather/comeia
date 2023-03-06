import { knex } from '../../../../Database/connection';
import { IToDoList, IToDoUpdate } from './IUpdateToDoListRepository';

class UpdateToDoListRepository implements IToDoList {
    private static INSTANCE: UpdateToDoListRepository;

    public static getIntance(): UpdateToDoListRepository {
        if (!UpdateToDoListRepository.INSTANCE) {
            UpdateToDoListRepository.INSTANCE = new UpdateToDoListRepository();
        }
        return UpdateToDoListRepository.INSTANCE;
    }

    async findUser(id: string) {
        const user = await knex
            .select('users.id')
            .from('users')
            .where('users.id', id)
            .first();

        return user || false;
    }

    async update({ description, performed, id }: IToDoUpdate) {
        await knex('todolist').where('id', id).update({
            description,
            performed,
        });
    }
}

export { UpdateToDoListRepository };
