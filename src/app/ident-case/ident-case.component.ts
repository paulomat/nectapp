import { Component, OnInit, Input } from "@angular/core";
import { NectApiService } from "../nect-api.service";

@Component({
  selector: "app-ident-case",
  templateUrl: "./ident-case.component.html",
  styleUrls: ["./ident-case.component.css"]
})
export class IdentCaseComponent implements OnInit {
  public caseId: string;
  public caseStatus: string;

  @Input() identCases = new Array();

  constructor(private NectApiService: NectApiService) {}

  ngOnInit() {}

  getCaseStatus(caseId: string, index: number) {
    console.log(caseId);
    console.log(index);
    this.NectApiService.getCaseStatus(caseId)
      .then(body => {
        console.log(body);
      })
      .catch(error => {
        console.log(error);
      });
  }

  getIdentData(caseId: string, index: number) {
    this.NectApiService.getIdentData(caseId).then(body => {
      console.log(body);
    });
  }
}
