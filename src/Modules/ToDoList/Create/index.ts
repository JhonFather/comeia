import { CreateToDoListRepository } from './Repositories/CreateToDoListRepository';
import { CreateToDoListService } from './Services/CreateToDoListService';
import { CreateTodoListController } from './Controllers/CreateToDoListController';

const createToDoListRepository = CreateToDoListRepository.getIntance();
const createToDoListService = new CreateToDoListService(
    createToDoListRepository,
);
const createToDoListController = new CreateTodoListController(
    createToDoListService,
);

export { createToDoListController };
