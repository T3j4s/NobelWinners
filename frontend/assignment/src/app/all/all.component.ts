import { Component, OnInit } from "@angular/core";
import { FetchWinnersService } from "../fetch-winners.service";

@Component({
  selector: "app-all",
  templateUrl: "./all.component.html",
  styleUrls: ["./all.component.css"]
})
export class AllComponent implements OnInit {
  constructor(private winnerSrv: FetchWinnersService) {}

  ngOnInit() {
    this.get();
  }

  result;
  toggler = true;
  get() {
    this.winnerSrv.getAll().subscribe(
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
