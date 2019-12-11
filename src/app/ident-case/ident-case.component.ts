import { Component, OnInit, Input } from "@angular/core";
import { NectApiService } from "../nect-api.service";

@Component({
  selector: "app-ident-case",
  templateUrl: "./ident-case.component.html",
  styleUrls: ["./ident-case.component.css"]
})
export class IdentCaseComponent implements OnInit {
  @Input() identCase;

  constructor(private NectApiService: NectApiService) {}

  ngOnInit() {}

  getCaseStatus() {
    this.NectApiService.getCaseStatus(this.identCase.id)
      .then(body => {
        console.log(body);

        let response = String.fromCharCode.apply(
          null,
          Array.from(new Uint32Array(body))
        );
        console.log(response);
        this.identCase.status = response.state;
      })
      .catch(error => {
        console.log(error);
      });
  }

  getIdentData() {
    this.NectApiService.getIdentData(this.identCase.id)
      .then(body => {
        console.log(body);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
