import {Component} from "@angular/core";
import {Todo} from "./todo";
import {TodoService} from "./todo.service";
@Component({
  moduleId: module.id,
  selector: 'app-todo-new',
  templateUrl: 'todo-new.component.html'
})
export class TodoNewComponent {
  public todo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  create() {
    console.log('create');
    this.todoService.create(this.todo);
  }
}
