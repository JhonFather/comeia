interface IRequest {
    email: string;
    password: string;
}

interface IResult {
    status: number;
    message?: string;
}

export { IRequest, IResult };
