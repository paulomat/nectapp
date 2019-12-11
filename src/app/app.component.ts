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

  disableCreateButton: boolean = false;
  identCases = new Array();

  createCase() {
    this.disableCreateButton = true;

    let elementIndex =
      this.identCases.push({
        id: "",
        status: "pending"
      }) - 1;

    this.NectApiService.getCaseId()
      .then(response => {
        this.identCases[elementIndex].id = response;
        this.disableCreateButton = false;
      })
      .catch(err => {
        this.identCases[elementIndex].status = "error";
        this.disableCreateButton = false;
      });
  }
}
