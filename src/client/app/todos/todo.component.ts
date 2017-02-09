import {Component, Input, OnInit} from "@angular/core";
import {Todo} from "./todo";
import {TodoService} from "./todo.service";
@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    private todoService: TodoService
  ) { }

  @Input()
  public todo: Todo;

  public isEditing: boolean = false;

  public toggleCompleted() {
    this.todo.completed = !this.todo.completed;
  }

  toggleEdit(isEditing: boolean) {
    this.isEditing = isEditing;
  }

  remove() {
    this.todoService.delete(this.todo);
  }

  ngOnInit() {
    console.log(this.todo);
  }
}
