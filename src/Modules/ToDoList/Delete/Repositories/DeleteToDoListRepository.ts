import { knex } from '../../../../Database/connection';
import { IToDoList } from './IDeleteToDoListRepository';

class DeleteToDoListRepository implements IToDoList {
    private static INSTANCE: DeleteToDoListRepository;

    public static getIntance(): DeleteToDoListRepository {
        if (!DeleteToDoListRepository.INSTANCE) {
            DeleteToDoListRepository.INSTANCE = new DeleteToDoListRepository();
        }
        return DeleteToDoListRepository.INSTANCE;
    }

    async findUser(id: string) {
        const user = await knex
            .select('users.id')
            .from('users')
            .where('users.id', id)
            .first();

        return user || false;
    }

    async deleteListById(id: string) {
        await knex('todolist').where('id', id).del();
    }
}

export { DeleteToDoListRepository };
