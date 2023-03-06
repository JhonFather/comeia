import { Request, Response } from 'express';

import { AuthService } from '../Services/AuthUserService';

export class AuthController {
    constructor(private userService: AuthService) {}

    async login(request: Request, response: Response) {
        const { email, password } = request.body;

        const { status, message, token, refreshToken } =
            await this.userService.verifyUser({
                email,
                password,
            });

        return response.status(status).json({
            message,
            token,
            refreshToken,
        });
    }
}
