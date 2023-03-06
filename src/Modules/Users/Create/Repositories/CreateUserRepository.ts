import { knex } from '../../../../Database/connection';
import { User } from '../Model/User';
import { IUser, ICreateUserDTO } from './ICreateUserRepository';

class CreateUserRepository implements IUser {
    private static INSTANCE: CreateUserRepository;

    public static getIntance(): CreateUserRepository {
        if (!CreateUserRepository.INSTANCE) {
            CreateUserRepository.INSTANCE = new CreateUserRepository();
        }
        return CreateUserRepository.INSTANCE;
    }

    async findUser(email: string) {
        const user = await knex
            .select('users.id', 'users.email', 'users.password')
            .from('users')
            .where('users.email', email)
            .first();

        return user || false;
    }

    async create({ email, password }: ICreateUserDTO) {
        const user = new User();
        Object.assign(user, {
            email,
            password,
        });
        await knex('users').insert({
            id: user.id,
            email: user.email,
            password: user.password,
        });
    }
}

export { CreateUserRepository };
