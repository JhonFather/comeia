import { Request, Response } from 'express';
import { CreateUserService } from '../Services/CreateUserService';

class CreateUserController {
    constructor(private userService: CreateUserService) {}

    async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const { status, message } = await this.userService.execute({
            email,
            password,
        });

        return response.status(status).json({ message });
    }
}

export { CreateUserController };
