import {Component, OnInit} from "@angular/core";
import {TodoService} from "./todo.service";
import {Todo} from "./todo";
import {ActivatedRoute, Params} from "@angular/router";
@Component({
  moduleId: module.id,
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})
export class TodoListComponent implements OnInit{

  public todos: Todo[];

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {

    // this.todoService.filter(true)
    //   .subscribe(todos => {
    //     this.todos = todos
    //   });

    /*this.route.params
      .switchMap((params: Params) => console.log(params))
  */

    this.todoService.list()
      .then(todos => this.todos = todos)
  }
}
