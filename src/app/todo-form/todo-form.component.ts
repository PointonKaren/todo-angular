import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Tasks } from "../mock.tasks";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  addTodoForm = new FormControl("");
  addDescriptionForm = new FormControl("");
  tasks = Tasks;
  constructor() {}
  /**
   * Fonction pour ajouter un Todo
   */
  addTodo = () => {
    this.tasks.push({
      text: `${this.addTodoForm.value?.trim()}`,
      description: `${this.addDescriptionForm.value?.trim()}`,
      checked: false,
      id: Date.now(),
    });
  };

  ngOnInit(): void {}
}
