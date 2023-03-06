import { User } from '../Model/User';

interface ICreateUserDTO {
    email: string;
    password: string;
}

interface IUser {
    findUser(email: string): Promise<User[]>;
    create({ email, password }: ICreateUserDTO): void;
}

export { IUser, ICreateUserDTO };
