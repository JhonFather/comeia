import { Request, Response } from 'express';
import { UpdateToDoListService } from '../Services/UpdateToDoListService';

class UpdateTodoListController {
    constructor(private createToDoListService: UpdateToDoListService) {}

    async update(request: Request, response: Response) {
        const { id, description, performed } = request.body;
        const { authorization } = request.headers;

        const { status, message } = await this.createToDoListService.execute({
            id,
            description,
            performed,
            authorization,
        });

        return response.status(status).json({ message });
    }
}

export { UpdateTodoListController };
