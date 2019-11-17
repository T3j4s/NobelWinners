import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NamesComponent } from "./names/names.component";
import { YearComponent } from "./year/year.component";
import { YearCategoryComponent } from "./year-category/year-category.component";
import { AllComponent } from "./all/all.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "names", component: NamesComponent },
  { path: "years", component: YearComponent },
  { path: "yearCategory", component: YearCategoryComponent },
  { path: "all", component: AllComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
