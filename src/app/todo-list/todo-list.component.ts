import { Component, OnInit, ViewContainerRef, ViewChild, ComponentRef } from "@angular/core";

import { Task } from "../tasks/task";
import { Tasks } from "../tasks/mock.tasks";
import { TaskDescriptionComponent } from "./../task-description/task-description.component";

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

  display = false;
  /**
   * Trigger la présence ou non du component de description d'une tâche
   * @param task : Object
   */
  displayDetail(task: Task) {
    this.selectedTask = task;
    this.display = true;
    if (this.selectedTask.description === "") {
      this.selectedTask.description = "Il n'y a aucune description pour cette tâche.";
    }
  }

  /**
   * Modifie le boolean de display en fonction de l'argument reçu (depuis l'enfant)
   */
  closeDetail(bool: boolean) {
    this.display = bool;
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

  ngOnInit() {
    this.selectedTask = { text: "", description: "", checked: false, id: -1 };
  }
}
