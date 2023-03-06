import jwt from 'jsonwebtoken';
import { ListToDoListRepository } from '../Repositories/ListToDoListRepository';
import { IRequest, IResult } from './IListToDoListService';

class LisToDoListService {
    constructor(private listToDoListRepository: ListToDoListRepository) {}

    async execute({
        authorization,
        limit,
        offset,
        description,
        performed,
    }: IRequest) {
        let res: IResult;

        const token = authorization!.split(' ')[1] as string;

        const { id } = jwt.decode(token) as { id: string };

        const user = await this.listToDoListRepository.findUser(id);

        if (!user) {
            res = {
                status: 400,
                message:
                    'Ocorreu um erro ao tentar trazer suas tarefas, verifique seu token!',
            };

            return res;
        }

        const todoList = await this.listToDoListRepository.getListById(
            id,
            limit,
            (offset - 1) * limit,
            description,
            performed,
        );

        res = {
            status: 200,
            message: 'Sua lista de tarefas:',
            todoList,
            page_size: limit,
            page_number: offset,
        };

        return res;
    }
}

export { LisToDoListService };
