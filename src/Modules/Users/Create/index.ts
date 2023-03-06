import { CreateUserRepository } from './Repositories/CreateUserRepository';
import { CreateUserService } from './Services/CreateUserService';
import { CreateUserController } from './Controllers/CreateUserController';

const createUserRepository = CreateUserRepository.getIntance();
const createUserService = new CreateUserService(createUserRepository);
const createUserController = new CreateUserController(createUserService);

export { createUserController };
