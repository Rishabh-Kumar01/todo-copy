import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../models/todo.model.js';
import { TodoService } from '../../services/todo.service.js';
import { TodoStoreService } from '../../store/todo-store.service.js';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  title: string = '';

  constructor(
    private todoService: TodoService,
    private todoStoreService: TodoStoreService
  ) {}

  addTodo(): void {
    if (!this.title.trim()) return;

    const newTodo: Partial<Todo> = {
      title: this.title,
      completed: false,
    };

    this.todoService.addTodo(newTodo).subscribe({
      next: (res) => {
        this.todoStoreService.addTodo(res.data!);
        const message = res?.message?.trim() || 'Todo added successfully!';
        this.title = '';
      },
      error: (err) => {
        const errorMessage = err?.error?.message || 'An error occurred!';
        console.error(errorMessage);
      },
    });
  }
}
