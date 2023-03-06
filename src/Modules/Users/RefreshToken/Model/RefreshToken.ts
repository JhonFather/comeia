import { v4 as uuidv4 } from 'uuid';

class RefreshToken {
    id!: string;

    expiresIn!: number;

    user_id!: string;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export { RefreshToken };
