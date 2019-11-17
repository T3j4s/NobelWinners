import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NamesComponent } from "./names/names.component";
import { YearComponent } from "./year/year.component";
import { YearCategoryComponent } from "./year-category/year-category.component";
import { AllComponent } from "./all/all.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { FetchWinnersService } from "./fetch-winners.service";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
@NgModule({
  declarations: [
    AppComponent,
    NamesComponent,
    YearComponent,
    YearCategoryComponent,
    AllComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DatePickerModule
  ],
  providers: [FetchWinnersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
