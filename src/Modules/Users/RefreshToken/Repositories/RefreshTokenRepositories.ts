import { knex } from '../../../../Database/connection';
import { RefreshToken } from '../Model/RefreshToken';
import {
    ICreateRefreshTokenDTO,
    IRefreshToken,
} from './IRefreshTokenRepositories';

class RefreshTokenRepository implements IRefreshToken {
    private static INSTANCE: RefreshTokenRepository;

    public static getIntance(): RefreshTokenRepository {
        if (!RefreshTokenRepository.INSTANCE) {
            RefreshTokenRepository.INSTANCE = new RefreshTokenRepository();
        }
        return RefreshTokenRepository.INSTANCE;
    }

    async findRefreshToken(id: string) {
        const refreshToken = await knex
            .select(
                'refreshtoken.id',
                'refreshtoken.expiresIn',
                'refreshtoken.user_id',
            )
            .from('refreshtoken')
            .where('refreshtoken.id', id)
            .first();

        return refreshToken || false;
    }

    async create({
        user_id,
        expiresIn,
    }: ICreateRefreshTokenDTO): Promise<RefreshToken> {
        const generateRefreshToken = new RefreshToken();

        Object.assign(generateRefreshToken, {
            expiresIn,
            user_id,
        });

        await knex('refreshtoken').insert({
            id: generateRefreshToken.id,
            expiresIn: generateRefreshToken.expiresIn,
            user_Id: generateRefreshToken.user_id,
        });

        return generateRefreshToken;
    }

    async deleteListById(user_id: string) {
        await knex('refreshtoken').where('user_id', user_id).del();
    }
}

export { RefreshTokenRepository };
