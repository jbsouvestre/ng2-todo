import {NgModule} from "@angular/core";
import {TodoComponent} from "./todo.component";
import {TodoService} from "./todo.service";
import {TodoRoutingModule} from "./todo-routing.module";
import {TodoListComponent} from "./todo-list.component";
import {CommonModule} from "@angular/common";
import {TodoNewComponent} from "./todo-new.component";
import {FormsModule} from "@angular/forms";
import {TodoFooterComponent} from "./todo-footer.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ],
  declarations: [
    TodoListComponent,
    TodoComponent,
    TodoNewComponent,
    TodoFooterComponent
  ],
  exports: [
    TodoListComponent,
    TodoComponent,
    TodoNewComponent,
    TodoFooterComponent
  ],
  providers: [
    TodoService
  ],
})
export class TodoModule { }
