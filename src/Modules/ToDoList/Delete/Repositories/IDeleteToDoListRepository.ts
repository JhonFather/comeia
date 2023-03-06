interface IList {
    id: string;
    date: string;
    description: string;
    performed: string;
}

interface IToDoList {
    findUser(id: string): Promise<IList[]>;
    deleteListById(id: string): void;
}

export { IToDoList };
