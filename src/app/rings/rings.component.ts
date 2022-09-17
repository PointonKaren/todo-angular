import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-rings",
  templateUrl: "./rings.component.html",
  styleUrls: ["./rings.component.scss"],
})
export class RingsComponent implements OnInit {
  rings = [1, 2, 3, 4, 5, 6];
  constructor() {}

  ngOnInit(): void {}
}
