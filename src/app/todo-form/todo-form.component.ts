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
   * Fonction qui permet d'ajouter le contenu de l'input en faisant Enter s'il n'est pas vide
   * @param event
   */
  sendIt = (event: any) => {
    event.preventDefault();
    if (event.target.value === "") {
      console.log("vide");
    } else {
      this.addTodo(event.target.value);
    }
  };

  /**
   * Fonction pour ajouter un Todo
   */
  addTodo = (todoText: string) => {
    this.tasks.push({
      text: todoText,
      description: `${this.addDescriptionForm.value?.trim()}`,
      checked: false,
      id: this.tasks.length + 1,
    });
    this.sortArray();
    this.updateLocalStorage();
  };

  updateLocalStorage = () => {
    localStorage.setItem("localStorage", JSON.stringify(this.tasks));
  };

  sortArray = () => {
    this.tasks.sort((a, b) => Number(a.id) - Number(b.id));
  };

  ngOnInit(): void {
    this.sortArray();
    this.updateLocalStorage();
  }
}
