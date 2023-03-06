import jwt from 'jsonwebtoken';
import { CreateToDoListRepository } from '../Repositories/CreateToDoListRepository';
import { IRequest, IResult } from './ICreateToDoListService';

class CreateToDoListService {
    constructor(private createToDoListRepository: CreateToDoListRepository) {}

    async execute({ description, performed, authorization }: IRequest) {
        let res: IResult;

        const token = authorization!.split(' ')[1] as string;

        const { id } = jwt.decode(token) as { id: string };

        const user = await this.createToDoListRepository.findUser(id);

        if (!user) {
            res = {
                status: 400,
                message:
                    'Ocorreu um erro ao tentar cadastrar, verifique seu token!',
            };

            return res;
        }
        const task = await this.createToDoListRepository.create({
            date: new Date().toISOString().slice(0, 19).replace('T', ' '),
            description,
            performed,
            user_id: id,
        });
        const { user_id: _, ...todoList } = task;

        res = {
            status: 201,
            task: todoList,
        };

        return res;
    }
}

export { CreateToDoListService };
