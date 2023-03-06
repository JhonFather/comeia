import dayjs from 'dayjs';
import { GenereteRefreshToken } from '../../../../Provider/GenerateRefreshToken';
import { GenerateToken } from '../../../../Provider/GenereteToken';
import { IRefreshToken } from '../Repositories/IRefreshTokenRepositories';
import { IResult } from './IRefreshTokenService';

class RefreshTokenService {
    constructor(private createRefreshTokenRepository: IRefreshToken) {}

    async execute(refreshToken: string): Promise<IResult> {
        const genereteToken = new GenerateToken();
        let res: IResult;

        const refresh_token =
            await this.createRefreshTokenRepository.findRefreshToken(
                refreshToken,
            );

        if (!refresh_token) {
            res = {
                status: 400,
                message: 'Refresh token invalido',
            };

            return res;
        }

        const refreshTokenExpired = dayjs().isAfter(
            dayjs.unix(refresh_token.expiresIn),
        );

        const token = await genereteToken.execute(refresh_token.user_id);

        if (refreshTokenExpired) {
            this.createRefreshTokenRepository.deleteListById(
                refresh_token.user_id,
            );
            const generateRefreshToken = new GenereteRefreshToken();
            const newRefreshToken = await generateRefreshToken.execute(
                refresh_token.user_id,
            );

            res = {
                status: 200,
                token,
                newRefreshToken,
            };

            return res;
        }

        res = {
            status: 200,
            token,
        };

        return res;
    }
}

export { RefreshTokenService };
