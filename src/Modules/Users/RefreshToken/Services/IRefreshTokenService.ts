interface IResult {
    status: number;
    message?: string;
    token?: string;
    newRefreshToken?: {
        id: string;
        expiresIn: number;
        user_id: string;
    };
}

export { IResult };
