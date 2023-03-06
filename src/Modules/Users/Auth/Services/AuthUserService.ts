import bcrypt from 'bcrypt';
import { IAuth } from '../Repositories/IAuthUserRepository';
import { IRequest, IResult } from './IAuthUserService';
import { GenereteRefreshToken } from '../../../../Provider/GenerateRefreshToken';
import { GenerateToken } from '../../../../Provider/GenereteToken';

class AuthService {
    constructor(private authRepository: IAuth) {}

    async verifyUser({ email, password }: IRequest): Promise<IResult> {
        const genereteToken = new GenerateToken();
        const generateRefreshToken = new GenereteRefreshToken();

        let res: IResult;
        const user = await this.authRepository.findUser(email);

        if (!user) {
            res = {
                status: 400,
                message: 'E-mail ou senha inválidos',
            };

            return res;
        }
        const verifyPass = await bcrypt.compare(password, user.password);

        if (!verifyPass) {
            res = {
                status: 400,
                message: 'E-mail ou senha inválidos',
            };

            return res;
        }
        const { id } = user;

        const token = await genereteToken.execute(id);

        this.authRepository.deleteListById(user.id);

        const refreshToken = await generateRefreshToken.execute(id);

        res = {
            status: 200,
            token,
            refreshToken,
        };

        return res;
    }
}

export { AuthService };
