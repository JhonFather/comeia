import { knex } from '../../../../Database/connection';
import { ToDoList } from '../Model/ToDoList';
import { IToDoList, ICreateToDoListDTO } from './ICreateToDoListRepository';

class CreateToDoListRepository implements IToDoList {
    private static INSTANCE: CreateToDoListRepository;

    public static getIntance(): CreateToDoListRepository {
        if (!CreateToDoListRepository.INSTANCE) {
            CreateToDoListRepository.INSTANCE = new CreateToDoListRepository();
        }
        return CreateToDoListRepository.INSTANCE;
    }

    async findUser(id: string) {
        const user = await knex
            .select('users.id')
            .from('users')
            .where('users.id', id)
            .first();

        return user || false;
    }

    async create({
        date,
        description,
        performed,
        user_id,
    }: ICreateToDoListDTO): Promise<ToDoList> {
        const todo = new ToDoList();
        Object.assign(todo, {
            date,
            description,
            performed,
            user_id,
        });
        await knex('todolist').insert({
            date: todo.date,
            description: todo.description,
            performed: todo.performed,
            user_id: todo.user_id,
        });

        return todo;
    }
}

export { CreateToDoListRepository };
