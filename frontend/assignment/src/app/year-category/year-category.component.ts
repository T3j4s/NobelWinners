import { Component, OnInit } from "@angular/core";
import { FetchWinnersService } from "../fetch-winners.service";

@Component({
  selector: "app-year-category",
  templateUrl: "./year-category.component.html",
  styleUrls: ["./year-category.component.css"]
})
export class YearCategoryComponent implements OnInit {
  constructor(private winnerSrv: FetchWinnersService) {}

  ngOnInit() {}
  toggler = true;
  result;
  getCategory(year, cat) {
    let categoryName = cat.toLowerCase();
    let dateValue = new Date(year).getFullYear();
    let category = {
      year: dateValue,
      category: categoryName
    };
    this.winnerSrv.getByCategory(category).subscribe(
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
