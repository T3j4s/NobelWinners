import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FetchWinnersService {
  dataUrl: string = "http://localhost:8001/api";

  constructor(private http: HttpClient) {}

  public getByNames(name) {
    return this.http.post(this.dataUrl + "/name", name);
  }

  public getByYears(year) {
    return this.http.post(this.dataUrl + "/year", year);
  }

  public getByCategory(data) {
    return this.http.post(this.dataUrl + "/year/category", data);
  }

  public getAll() {
    return this.http.get(this.dataUrl + "/get");
  }

  headers = new HttpHeaders().set("Content-Type", "application/JSON");
  // public getVotes(id, data) {
  //   return this.http.put(this.dataUrl + "/" + id, data, {
  //     headers: this.headers
  //   });
  // }
}
