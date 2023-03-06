import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';

dotenv.config();

class GenerateToken {
    async execute(id: string) {
        const token = jwt.sign({ id }, process.env.JWT_KEY!, {
            subject: id,
            expiresIn: '30s',
        });

        return token;
    }
}

export { GenerateToken };
