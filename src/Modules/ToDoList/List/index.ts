import { ListToDoListRepository } from './Repositories/ListToDoListRepository';
import { LisToDoListService } from './Services/ListToDoListService';
import { ListTodoListController } from './Controllers/ListToDoListController';

const listToDoListRepository = ListToDoListRepository.getIntance();
const listToDoListService = new LisToDoListService(listToDoListRepository);
const listToDoListController = new ListTodoListController(listToDoListService);

export { listToDoListController };
