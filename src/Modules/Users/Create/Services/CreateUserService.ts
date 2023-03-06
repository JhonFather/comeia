import bcrypt from 'bcrypt';
import { IUser } from '../Repositories/ICreateUserRepository';
import { IRequest, IResult } from './ICreateUserService';

class CreateUserService {
    constructor(private createUsersRepository: IUser) {}

    async execute({ email, password }: IRequest) {
        let res: IResult;

        const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

        const emailValidation: boolean = expression.test(email);

        if (!emailValidation) {
            res = {
                status: 400,
                message: 'E-mail invalido',
            };
            return res;
        }

        const user = await this.createUsersRepository.findUser(email);
        if (!user) {
            const hashPassword = await bcrypt.hash(password, 10);

            this.createUsersRepository.create({
                email,
                password: hashPassword,
            });

            res = {
                status: 201,
            };

            return res;
        }

        res = {
            status: 409,
            message: 'Este usuário ja existe!',
        };

        return res;
    }
}

export { CreateUserService };
