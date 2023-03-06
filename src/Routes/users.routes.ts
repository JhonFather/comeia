import { Router } from 'express';
import { createUserController } from '../Modules/Users/Create';

const userRoutes = Router();

userRoutes.post('/', (request, response) => {
    return createUserController.create(request, response);
});

userRoutes.patch('/');

export { userRoutes };
