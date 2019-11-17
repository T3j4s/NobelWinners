import { Component, OnInit } from "@angular/core";
import { FetchWinnersService } from "../fetch-winners.service";
@Component({
  selector: "app-year",
  templateUrl: "./year.component.html",
  styleUrls: ["./year.component.css"]
})
export class YearComponent implements OnInit {
  constructor(private winnerSrv: FetchWinnersService) {}
  ngOnInit() {}
  result;
  toggler = true;
  getYears(data) {
    let dateValue = new Date(data).getFullYear();
    let year = {
      year: dateValue
    };
    console.log(year);
    this.winnerSrv.getByYears(year).subscribe(
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
