import { Router } from 'express';
import { refreshTokenController } from '../Modules/Users/RefreshToken';

const refreshTokenRoutes = Router();

refreshTokenRoutes.post('/', (request, response) => {
    return refreshTokenController.refrash(request, response);
});

refreshTokenRoutes.patch('/');

export { refreshTokenRoutes };
