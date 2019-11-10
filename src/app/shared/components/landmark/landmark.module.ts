import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandmarkComponent } from "./landmark.component";
import { RouterModule } from "@angular/router";
import { EllipsisPipe } from "../../pipes/ellipsis.pipe";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [LandmarkComponent, EllipsisPipe],
  exports: [LandmarkComponent]
})
export class LandmarkModule {}
