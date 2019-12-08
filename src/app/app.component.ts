import { Component } from "@angular/core";
import { IdentCaseComponent } from "./ident-case/ident-case.component";
import { NectApiService } from "./nect-api.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private NectApiService: NectApiService) {}

  title = "nectapp";
  identCases = new Array();

  createCase() {
    this.NectApiService.getCaseId().then(response => {
      this.identCases.push({
        id: response,
        status: "done"
      });
    });
  }
}
