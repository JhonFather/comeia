import { Router } from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware';
import { authRoutes } from './auth.routes';
import { userRoutes } from './users.routes';
import { refreshTokenRoutes } from './refreshtoken.routes';
import { toDoListRoutes } from './todolist.routes';

const router = Router();

router.use('/login', authRoutes);
router.use('/refresh-token', refreshTokenRoutes);
router.use('/user', userRoutes);
router.use('/todo', authMiddleware, toDoListRoutes);

export { router };
