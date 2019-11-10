import { NgModule } from "@angular/core";
import { NavbarModule } from "./components/navbar/navbar.module";
import { LandmarkModule } from "./components/landmark/landmark.module";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [HttpClientModule, NavbarModule, LandmarkModule],
  exports: [NavbarModule, LandmarkModule]
})
export class SharedModule {}
