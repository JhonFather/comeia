interface IList {
    id: string;
    date: Date;
    description: string;
    performed: boolean;
}

interface IToDoList {
    findUser(id: string): Promise<IList[]>;
    getListById(
        id: string,
        limit: number,
        offset: number,
        description: string,
        performed: boolean,
    ): Promise<IList[]>;
}

export { IList, IToDoList };
