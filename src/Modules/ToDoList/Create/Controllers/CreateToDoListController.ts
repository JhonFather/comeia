import { Request, Response } from 'express';
import { CreateToDoListService } from '../Services/CreateToDoListService';

class CreateTodoListController {
    constructor(private createToDoListService: CreateToDoListService) {}

    async create(request: Request, response: Response) {
        const { description, performed } = request.body;
        const { authorization } = request.headers;

        const { status, message, task } =
            await this.createToDoListService.execute({
                description,
                performed,
                authorization,
            });

        return response.status(status).json({ message, task });
    }
}

export { CreateTodoListController };
