import { Component, OnInit } from "@angular/core";
// import { FormControl } from "@angular/forms";

import { Task } from "../task";
import { Tasks } from "../mock.tasks";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  // addTodoForm = new FormControl("");
  // addDescriptionForm = new FormControl("");

  constructor() {}

  tasks = Tasks;
  selectedTask?: Task;
  taskToDelete?: Task;

  /**
   * Fonction pour ajouter un Todo
   */
  // addTodo = () => {
  //   this.tasks.push({
  //     text: `${this.addTodoForm.value?.trim()}`,
  //     description: `${this.addDescriptionForm.value?.trim()}`,
  //     checked: false,
  //     id: Date.now(),
  //   });
  //   console.log(this.tasks.length);
  // };

  /**
   * Sélectionner la tâche
   * @param task
   */
  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log(task.id);
  }

  deleteTask = (task: Task) => {
    let indexToDelete = this.tasks.indexOf(task);
    // Si la tâche a été supprimée d'une autre manière (ex du local storage)
    if (indexToDelete != -1) {
      this.tasks.splice(indexToDelete, 1);
    } else {
      console.log("La tâche n'existe pas.");
    }
  };

  ngOnInit(): void {}
}
