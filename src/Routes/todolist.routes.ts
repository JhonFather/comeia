import { Router } from 'express';
import { authMiddleware } from '../Middlewares/authMiddleware';
import { listToDoListController } from '../Modules/ToDoList/List';
import { createToDoListController } from '../Modules/ToDoList/Create';
import { updateToDoListController } from '../Modules/ToDoList/Update';
import { deleteToDoListController } from '../Modules/ToDoList/Delete';

const toDoListRoutes = Router();

toDoListRoutes.get('/', (request, response) => {
    return listToDoListController.index(request, response);
});
toDoListRoutes.post('/', (request, response) => {
    return createToDoListController.create(request, response);
});
toDoListRoutes.put('/', (request, response) => {
    return updateToDoListController.update(request, response);
});
toDoListRoutes.delete('/', (request, response) => {
    return deleteToDoListController.destroy(request, response);
});

toDoListRoutes.patch('/');

export { toDoListRoutes };
