import { Component, OnInit } from "@angular/core";
import { FetchWinnersService } from "../fetch-winners.service";
@Component({
  selector: "app-names",
  templateUrl: "./names.component.html",
  styleUrls: ["./names.component.css"]
})
export class NamesComponent implements OnInit {
  constructor(private winnerSrv: FetchWinnersService) {}

  ngOnInit() {}
  result;
  toggler = true;
  getNames(data) {
    let name = {
      name: data
    };
    console.log(name);
    this.winnerSrv.getByNames(name).subscribe(
      res => {
        console.log(res);
        this.result = res;
        if (this.result.length == 0) {
          alert("No Records Found");
          this.toggler = true;
        } else {
          this.toggler = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}
