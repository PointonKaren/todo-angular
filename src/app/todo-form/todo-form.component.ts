import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

import { Tasks } from "../tasks/mock.tasks";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  addTodoForm = new FormControl("");
  addDescriptionForm = new FormControl("");

  tasks = Tasks;
  todoText!: string;

  constructor() {}

  /**
   * Fonction pour ajouter un Todo
   */
  addTodo = (todoText: string) => {
    this.tasks.push({
      text: todoText,
      description: `${this.addDescriptionForm.value?.trim()}`,
      checked: false,
      id: Date.now(),
    });
  };

  ngOnInit(): void {}
}
