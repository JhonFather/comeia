interface IUser {
    id: string;
    email: string;
    password: string;
}

interface IAuth {
    findUser(email: string): Promise<IUser>;
    deleteListById(user_id: string): void;
}

export { IAuth };
