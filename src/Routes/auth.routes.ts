import { Router } from 'express';
import { authController } from '../Modules/Users/Auth';

const authRoutes = Router();

authRoutes.post('/', (request, response) => {
    return authController.login(request, response);
});

authRoutes.patch('/');

export { authRoutes };
