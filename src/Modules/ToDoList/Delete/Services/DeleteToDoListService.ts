import jwt from 'jsonwebtoken';
import { DeleteToDoListRepository } from '../Repositories/DeleteToDoListRepository';
import { IRequest, IResult } from './IDeleteToDoListService';

class DeleteToDoListService {
    constructor(private deleteToDoListRepository: DeleteToDoListRepository) {}

    async execute({ authorization, id }: IRequest) {
        let res: IResult;

        const token = authorization!.split(' ')[1] as string;

        const tokenId = jwt.decode(token) as { id: string };

        const user = await this.deleteToDoListRepository.findUser(tokenId.id);

        if (!user) {
            res = {
                status: 400,
                message:
                    'Ocorreu um erro ao tentar trazer suas tarefas, verifique seu token!',
            };

            return res;
        }

        await this.deleteToDoListRepository.deleteListById(id);

        res = {
            status: 200,
            message: 'Tarefa excluida com sucesso!',
        };

        return res;
    }
}

export { DeleteToDoListService };
