import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-ident-case",
  templateUrl: "./ident-case.component.html",
  styleUrls: ["./ident-case.component.css"]
})
export class IdentCaseComponent implements OnInit {
  public caseId: string;
  public caseStatus: string;

  @Input() identCases = new Array();

  constructor() {}

  ngOnInit() {}
}
