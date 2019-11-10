import { Component, Input } from "@angular/core";
import { Landmark } from "../../models/landmark.model";

@Component({
  selector: "landmark",
  templateUrl: "./landmark.component.html",
  styleUrls: ["./landmark.component.scss"]
})
export class LandmarkComponent {
  isCollapsed: boolean = true;
  @Input() landmark: any;
  constructor() {}
}
