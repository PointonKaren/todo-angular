import { Component, OnInit } from "@angular/core";

import { Task } from "../tasks/task";
import { Tasks } from "../tasks/mock.tasks";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor() {}

  tasks = Tasks; // Tableau des tâches
  selectedTask?: Task;
  taskToDelete?: Task;

  /**
   * Sélectionner la tâche
   * @param task : Object
   */
  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log(task.id);
  }
  /**
   * Supprimer une tâche
   * @param task : Object
   */
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
