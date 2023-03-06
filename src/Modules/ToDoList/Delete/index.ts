import { DeleteToDoListRepository } from './Repositories/DeleteToDoListRepository';
import { DeleteToDoListService } from './Services/DeleteToDoListService';
import { DeleteTodoListController } from './Controllers/DeleteToDoListController';

const deleteToDoListRepository = DeleteToDoListRepository.getIntance();
const deleteToDoListService = new DeleteToDoListService(
    deleteToDoListRepository,
);
const deleteToDoListController = new DeleteTodoListController(
    deleteToDoListService,
);

export { deleteToDoListController };
