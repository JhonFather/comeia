import { knex } from '../../../../Database/connection';
import { IAuth } from './IAuthUserRepository';

class AuthRepository implements IAuth {
    private static INSTANCE: AuthRepository;

    public static getIntance(): AuthRepository {
        if (!AuthRepository.INSTANCE) {
            AuthRepository.INSTANCE = new AuthRepository();
        }
        return AuthRepository.INSTANCE;
    }

    async findUser(email: string) {
        const user = await knex
            .select('users.id', 'users.email', 'users.password')
            .from('users')
            .where('users.email', email)
            .first();

        return user || false;
    }

    async deleteListById(user_id: string) {
        await knex('refreshtoken').where('user_id', user_id).del();
    }
}

export { AuthRepository };
