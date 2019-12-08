import { Component } from "@angular/core";
import { IdentCaseComponent } from "./ident-case/ident-case.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "nectapp";
  identCases = new Array();

  createCase() {
    this.identCases.push({
      id: "12314",
      status: "done"
    });
    this.identCases.push({
      id: "12314",
      status: "done"
    });
    this.identCases.push({
      id: "12314",
      status: "done"
    });
    this.identCases.push({
      id: "12314",
      status: "done"
    });
  }
}
