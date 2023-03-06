import { RefreshTokenRepository } from './Repositories/RefreshTokenRepositories';
import { RefreshTokenService } from './Services/RefreshTokenService';
import { RefreshTokenController } from './Controllers/RefreshTokenController';

const refreshTokenRepository = RefreshTokenRepository.getIntance();
const refreshTokenService = new RefreshTokenService(refreshTokenRepository);
const refreshTokenController = new RefreshTokenController(refreshTokenService);

export { refreshTokenController };
