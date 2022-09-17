import { Component, OnInit } from "@angular/core";

import { Task } from "../tasks/task";
import { Tasks } from "../tasks/mock.tasks";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  constructor() {}
  tasks = Tasks; // Tableau des tâches
  selectedTask?: Task;

  /**
   * Sélectionner la tâche
   * @param task : Object
   */
  onSelect(task: Task): void {
    this.selectedTask = task;
    console.log(task.id);
  }

  ngOnInit(): void {}
}
