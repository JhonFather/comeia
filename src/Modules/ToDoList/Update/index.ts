import { UpdateToDoListRepository } from './Repositories/UpdateToDoListRepository';
import { UpdateToDoListService } from './Services/UpdateToDoListService';
import { UpdateTodoListController } from './Controllers/UpdateToDoListController';

const updateToDoListRepository = UpdateToDoListRepository.getIntance();
const updateToDoListService = new UpdateToDoListService(
    updateToDoListRepository,
);
const updateToDoListController = new UpdateTodoListController(
    updateToDoListService,
);

export { updateToDoListController };
