import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
    selector: "app-todo-form",
    imports:[FormsModule],
    templateUrl: "./todo-form.component.html",
    styleUrls: ["./todo-form.component.css"],
})
export class TodoFormComponent {
    title: string = "";
  constructor() {}

  addTodo(): void {
    console.log("Adding a todo");
  }
}