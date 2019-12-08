import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const APIKEY: string =
  "f2144530356facc5f1b002f00f8ebd2821599c7ba2fac8a25b0805b3f036f875";
const BaseUrl: string = "https://test.slfid.nect.rest/nightly/";
const SP_UUID: string = "9c505b2e-4382-4d82-972b-e6f01f6f69bc";

let body: any = {
  control: {
    callback: "",
    jumpResponseURI: "www.google.de",
    lang: "de_DE",
    intent: 2
  }
};

let options: any = {
  headers: {
    Authorization: "ApiKey " + APIKEY,
    "Content-Type": "application/json; charset=utf-8"
  },
  responseType: "text"
};

@Injectable({
  providedIn: "root"
})
export class NectApiService {
  async getCaseId() {
    return this.httpClient
      .post(BaseUrl + "sp/" + SP_UUID + "/cases/ ", body, options)
      .toPromise();
  }

  constructor(private httpClient: HttpClient) {}
}
