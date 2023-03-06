import dayjs from 'dayjs';
import { RefreshTokenRepository } from '../Modules/Users/RefreshToken/Repositories/RefreshTokenRepositories';

class GenereteRefreshToken {
    async execute(user_id: string) {
        const createRefreshTokenRepository = new RefreshTokenRepository();

        const expiresIn = dayjs().add(15, 'second').unix();

        const generateRefreshToken = await createRefreshTokenRepository.create({
            user_id,
            expiresIn,
        });

        return generateRefreshToken;
    }
}

export { GenereteRefreshToken };
