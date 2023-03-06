import { knex } from '../../../../Database/connection';
import { IList, IToDoList } from './IListToDoListRepository';

class ListToDoListRepository implements IToDoList {
    private static INSTANCE: ListToDoListRepository;

    public static getIntance(): ListToDoListRepository {
        if (!ListToDoListRepository.INSTANCE) {
            ListToDoListRepository.INSTANCE = new ListToDoListRepository();
        }
        return ListToDoListRepository.INSTANCE;
    }

    async findUser(id: string) {
        const user = await knex
            .select('users.id')
            .from('users')
            .where('users.id', id)
            .first();

        return user || false;
    }

    async getListById(
        id: string,
        limit: number,
        offset: number,
        description: string,
        performed: boolean,
    ): Promise<IList[]> {
        const todolist = await knex
            .select(
                'todolist.id',
                'todolist.date',
                'todolist.description',
                'todolist.performed',
            )
            .from('todolist')
            .where(builder =>
                builder
                    .where('user_id', id)
                    .andWhere(conbuilder => {
                        if (description) {
                            conbuilder.where(
                                'description',
                                'like',
                                `%${description}%`,
                            );
                        }
                    })
                    .andWhere(conbuilder => {
                        if (performed) {
                            conbuilder.where('performed', performed);
                        }
                    }),
            )
            .where('user_id', id)
            .orWhere('description', 'like', `%${description}%`)
            .limit(limit)
            .offset(offset);

        return todolist;
    }
}

export { ListToDoListRepository };
