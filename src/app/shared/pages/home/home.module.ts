import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared.module";
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomeComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey
    })
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule {}
