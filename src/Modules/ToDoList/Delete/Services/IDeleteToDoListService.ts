interface IRequest {
    authorization?: string;
    id: string;
}
interface IList {
    id: string;
    date: Date;
    description: string;
    performed: boolean;
}

interface IResult {
    status: number;
    message: string;
    todoList?: IList[];
}

export { IRequest, IResult };
