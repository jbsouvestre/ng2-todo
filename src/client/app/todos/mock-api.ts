import {InMemoryDbService} from "angular-in-memory-web-api";
import {Todo} from "./todo";

export class InMemoryTodoService implements InMemoryDbService {
  createDb() {
    let todos: Todo[] = [{
      id: 1,
      task: 'Create a todo app with angular',
      completed: false
    }, {
      id: 2,
      task: 'Learn TypeScript',
      completed: false
    }, {
      id: 3,
      task: 'Learn HTML',
      completed: true
    }];

    return { todos };
  }
}
