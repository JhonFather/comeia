import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

export const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction,
) => {
    const { authorization } = request.headers;

    if (!authorization) {
        return response.status(401).json({ message: 'Token ausente!' });
    }

    const [, token] = authorization.split(' ');

    try {
        verify(token, process.env.JWT_KEY!);

        return next();
    } catch (e) {
        return response.status(401).json({ message: 'Token invalido!' });
    }
};
