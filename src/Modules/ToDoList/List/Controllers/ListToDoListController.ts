import { Request, Response } from 'express';
import { LisToDoListService } from '../Services/ListToDoListService';

class ListTodoListController {
    constructor(private listToDoListService: LisToDoListService) {}

    async index(request: Request, response: Response) {
        const { authorization } = request.headers;
        const {
            limit = 10,
            offset = 1,
            description,
            performed,
        } = request.query;

        const pageSize = limit as string;
        const pageNumber = offset as string;
        const desc = description as string;
        const per = performed as string;

        const { status, message, todoList, page_size, page_number } =
            await this.listToDoListService.execute({
                authorization,
                limit: Number(pageSize),
                offset: Number(pageNumber),
                description: desc,
                performed: per as unknown as boolean,
            });

        return response
            .status(status)
            .json({ message, page_size, page_number, todoList });
    }
}

export { ListTodoListController };
