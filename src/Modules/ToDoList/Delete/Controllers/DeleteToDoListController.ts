import { Request, Response } from 'express';
import { DeleteToDoListService } from '../Services/DeleteToDoListService';

class DeleteTodoListController {
    constructor(private deleteToDoListService: DeleteToDoListService) {}

    async destroy(request: Request, response: Response) {
        const { authorization } = request.headers;
        const { id } = request.query;

        const qsId = id as string;

        const { status, message, todoList } =
            await this.deleteToDoListService.execute({
                authorization,
                id: qsId,
            });

        return response.status(status).json({ message, todoList });
    }
}

export { DeleteTodoListController };
