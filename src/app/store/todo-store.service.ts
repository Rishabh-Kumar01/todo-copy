import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoStoreService {
  private todosSubject = new BehaviorSubject<Todo[]>([]);

  todos$ = this.todosSubject.asObservable();

  setTodos(todos: Todo[]): void {
    this.todosSubject.next(todos);
  }

  addTodo(todo: Todo): void {
    const currentTodos = this.todosSubject.getValue();
    this.todosSubject.next([...currentTodos, todo]);
  }

  updateTodo(updated: Todo): void {
    const todos = this.todosSubject
      .getValue()
      .map((todo) => (todo._id === updated._id ? updated : todo));
    this.todosSubject.next(todos);
  }

  removeTodo(todoId: string): void {
    const todos = this.todosSubject
      .getValue()
      .filter((todo) => todo._id !== todoId);
    this.todosSubject.next(todos);
  }
}
