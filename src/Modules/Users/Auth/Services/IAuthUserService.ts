interface IRequest {
    email: string;
    password: string;
}

interface IResult {
    status: number;
    message?: string;
    token?: string;
    refreshToken?: {
        id: string;
        expiresIn: number;
        user_id: string;
    };
}

export { IRequest, IResult };
