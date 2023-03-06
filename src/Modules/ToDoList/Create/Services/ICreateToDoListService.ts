interface IRequest {
    description: string;
    performed: string;
    authorization?: string;
}

interface IResult {
    status: number;
    message?: string;
    task?: {
        id?: string;
        date: Date;
        description: string;
        performed: boolean;
    };
}

export { IRequest, IResult };
