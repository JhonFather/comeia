interface IToDoUpdate {
    id: string;
    description?: string;
    performed?: boolean;
}

interface IUser {
    id: string;
}

interface IToDoList {
    findUser(id: string): Promise<IUser>;
    update({ description, performed }: IToDoUpdate): void;
}

export { IToDoList, IToDoUpdate };
