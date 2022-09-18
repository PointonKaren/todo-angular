import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Tasks } from "../tasks/mock.tasks";
import { Task } from "../tasks/task";

@Component({
  selector: "app-todo-form",
  templateUrl: "./todo-form.component.html",
  styleUrls: ["./todo-form.component.scss"],
})
export class TodoFormComponent implements OnInit {
  addTodoForm = new FormControl("");
  addDescriptionForm = new FormControl("");
  storage = localStorage.getItem("storedTasks");
  tasks = JSON.parse(this.storage != null ? this.storage : JSON.stringify(Tasks));

  todoText!: string;

  constructor() {}

  /**
   * Fonction qui permet d'ajouter le contenu de l'input en faisant Enter s'il n'est pas vide
   * @param event
   */
  sendIt = (event: any) => {
    event.preventDefault();
    if (event.target.value === "") {
      alert("Le champ ne doit pas être vide !");
    } else {
      this.addTodo(event.target.value);
    }
  };

  /**
   * Ajouter un Todo
   * @param todoText
   */
  addTodo = (todoText: string) => {
    this.getLocalStorage();
    console.log(this.tasks);
    this.tasks.push({
      text: todoText,
      description: `${this.addDescriptionForm.value?.trim()}`,
      checked: false,
      id: this.tasks.length + 1,
    });
    this.todoText = "";
    this.addDescriptionForm.reset();
    this.updateLocalStorage();
    this.sortArray();
  };

  /**
   *
   */
  getLocalStorage = () => {
    this.storage = localStorage.getItem("storedTasks");
    this.tasks = JSON.parse(this.storage != null ? this.storage : JSON.stringify(Tasks));
  };

  /**
   * Mettre à jour le local storage
   */
  updateLocalStorage = () => {
    localStorage.setItem("storedTasks", JSON.stringify(this.tasks));
  };

  sortArray = () => {
    this.tasks.sort((a: Task, b: Task) => Number(a.id) - Number(b.id));
  };

  ngOnInit(): void {
    console.log(this.tasks);
    console.log(this.storage);
    this.getLocalStorage();
    this.sortArray();
  }
}
