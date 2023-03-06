import { ToDoList } from '../Model/ToDoList';

interface ICreateToDoListDTO {
    date: string;
    description: string;
    performed: string;
    user_id: string;
}

interface IUser {
    id: string;
}

interface IToDoList {
    findUser(id: string): Promise<IUser>;
    create({
        description,
        performed,
        user_id,
    }: ICreateToDoListDTO): Promise<ToDoList>;
}

export { IToDoList, ICreateToDoListDTO };
