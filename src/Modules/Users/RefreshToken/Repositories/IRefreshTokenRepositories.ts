import { RefreshToken } from '../Model/RefreshToken';

interface ICreateRefreshTokenDTO {
    expiresIn: number;
    user_id: string;
}

interface IRefreshToken {
    findRefreshToken(id: string): Promise<RefreshToken>;
    create({
        expiresIn,
        user_id,
    }: ICreateRefreshTokenDTO): Promise<RefreshToken>;
    deleteListById(user_id: string): void;
}

export { IRefreshToken, ICreateRefreshTokenDTO };
