import {Injectable} from "@angular/core";
import {Http, RequestOptionsArgs, Response} from "@angular/http";
import {Todo} from "./todo";

import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs";

class Filter {
  ALL: 'all';
  ACTIVE: 'active';
  COMPLETED: 'completed';
}

@Injectable()
export class TodoService {

  private URL = 'api/todos';

  constructor(private http: Http) { }

  list(): Promise<Todo[]> {
    return this.http.get(this.URL)
      .toPromise()
      .then(response => response.json().data as Todo[])
  }

  filter(filter: Filter): Observable<Todo[]> {

    return this.http.get(this.URL)
      .map((res: Response) => res.json().data as Todo[]);

  }

  create(todo: Todo): Promise<Todo> {
    return this.http.post(this.URL, JSON.stringify(todo))
      .toPromise()
      .then( () => todo);
  }

  delete(todo: Todo): void {
    this.http.delete(`${this.URL}/${todo.id}`);
  }
}
