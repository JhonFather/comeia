interface IRequest {
    authorization?: string;
    limit: number;
    offset: number;
    description: string;
    performed: boolean;
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
    page_size?: number;
    page_number?: number;
}

export { IRequest, IResult };
