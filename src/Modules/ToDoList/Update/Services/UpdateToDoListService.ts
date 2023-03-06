import jwt from 'jsonwebtoken';
import { UpdateToDoListRepository } from '../Repositories/UpdateToDoListRepository';
import { IRequest, IResult } from './IUpdateToDoListService';

class UpdateToDoListService {
    constructor(private updateToDoListRepository: UpdateToDoListRepository) {}

    async execute({ id, description, performed, authorization }: IRequest) {
        let res: IResult;

        const token = authorization!.split(' ')[1] as string;

        const tokenId = jwt.decode(token) as { id: string };

        const user = await this.updateToDoListRepository.findUser(tokenId.id);

        if (!user) {
            res = {
                status: 400,
                message:
                    'Ocorreu um erro ao tentar atualizar a tarefa, verifique seu token!',
            };

            return res;
        }
        await this.updateToDoListRepository.update({
            description,
            performed,
            id,
        });

        res = {
            status: 200,
            message: 'Tarefa atualizada com sucesso!',
        };

        return res;
    }
}

export { UpdateToDoListService };
