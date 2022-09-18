import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { RingsComponent } from "./rings/rings.component";
import { TaskDescriptionComponent } from "./task-description/task-description.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RingsComponent,
    TaskDescriptionComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
