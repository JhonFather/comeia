interface IRequest {
    id: string;
    description?: string;
    performed?: boolean;
    authorization?: string;
}

interface IResult {
    status: number;
    message: string;
}
export { IRequest, IResult };
