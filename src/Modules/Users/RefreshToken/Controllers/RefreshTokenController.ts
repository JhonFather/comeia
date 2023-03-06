import { Request, Response } from 'express';
import { RefreshTokenService } from '../Services/RefreshTokenService';

class RefreshTokenController {
    constructor(private refreshTokenService: RefreshTokenService) {}

    async refrash(request: Request, response: Response) {
        const { refresh_token } = request.body;

        const { status, message, token, newRefreshToken } =
            await this.refreshTokenService.execute(refresh_token);

        return response.status(status).json({
            message,
            token,
            newRefreshToken,
        });
    }
}

export { RefreshTokenController };
