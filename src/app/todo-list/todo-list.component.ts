import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { Tasks } from "../tasks/mock.tasks";
import { Task } from "../tasks/task";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  addTaskForm = new FormControl("");
  addDescriptionForm = new FormControl("");
  storage = localStorage.getItem("storedTasks");
  tasks = JSON.parse(this.storage != null ? this.storage : JSON.stringify(Tasks));

  selectedTask?: Task;
  taskToDelete?: Task;

  display = false;
  checked = false;

  todoText!: string;

  constructor() {}

  /**
   * Tri du tableau des tâches
   */
  sortArray = () => {
    this.tasks.sort((a: Task, b: Task) => Number(a.id) - Number(b.id));
  };

  /**
   * Fonction qui permet d'ajouter le contenu de l'input en faisant Enter, s'il n'est pas vide
   * @param event
   */
  sendIt = (event: any) => {
    event.preventDefault();
    if (event.target.value === "") {
      alert("Le champ ne doit pas être vide !");
    } else {
      this.addTask(event.target.value);
    }
  };

  /**
   * Ajouter une tâche
   * @param todoText
   */
  addTask = (todoText: string) => {
    this.getLocalStorage();
    console.log(this.tasks);
    console.log(this.addDescriptionForm.value?.trim());
    let description =
      this.addDescriptionForm.value?.trim() == undefined
        ? ""
        : this.addDescriptionForm.value?.trim();
    this.tasks.push({
      text: todoText,
      description: description,
      checked: false,
      id: this.tasks.length + 1,
    });
    this.todoText = "";
    this.addDescriptionForm.reset();
    this.updateLocalStorage();
    this.sortArray();
  };

  /**
   * Supprimer une tâche
   * @param task
   */
  deleteTask = (task: Task) => {
    let indexToDelete = this.tasks.indexOf(task);
    // Si la tâche a été supprimée d'une autre manière (ex du local storage)
    if (indexToDelete != -1) {
      this.tasks.splice(indexToDelete, 1);
    } else {
      console.log("La tâche n'existe pas");
    }
    this.updateLocalStorage();

    if (this.display) {
      this.display = false;
    }
  };

  /**
   * Trigger la présence ou non du component de description d'une tâche
   * @param task
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
   * Ajoute/retire la class "done" à la li si la tâche est cochée/décochée
   * @param task
   */
  isChecked = (task: Task) => {
    this.selectedTask = task;
    task.checked = !task.checked;
    this.updateLocalStorage();
  };

  /**
   * Récupérer les éléments depuis le local storage
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

  /**
   * Récupérer les tâches cochées
   * @returns Number
   */
  getNumberOfChecked = () => {
    let numberOfChecked = 0;
    for (let task of this.tasks) {
      if (task.checked) {
        numberOfChecked += 1;
      }
    }
    return numberOfChecked;
  };

  ngOnInit() {
    this.getLocalStorage();
    this.sortArray();
    this.selectedTask = { text: "", description: "", checked: false, id: -1 };
  }
}
