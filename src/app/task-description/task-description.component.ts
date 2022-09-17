import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { Task } from "../tasks/task";

@Component({
  selector: "app-task-description",
  templateUrl: "./task-description.component.html",
  styleUrls: ["./task-description.component.scss"],
})
export class TaskDescriptionComponent implements OnInit {
  constructor() {}
  @Input() task?: Task;

  // Permet de dire au parent que l'event sur l'enfant (ici, le clic sur le bouton close) aura un impact sur le boolean du parent
  @Output() onClick = new EventEmitter<boolean>();
  closeDetail = (bool: boolean) => {
    this.onClick.emit(bool);
  };

  ngOnInit(): void {}
}
