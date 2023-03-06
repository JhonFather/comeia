import { AuthRepository } from './Repositories/AuthUserRepository';
import { AuthService } from './Services/AuthUserService';
import { AuthController } from './Controllers/AuthCrontroller';

const authRepository = AuthRepository.getIntance();
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

export { authController };
