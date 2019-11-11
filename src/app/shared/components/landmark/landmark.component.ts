import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Landmark } from "../../models/landmark.model";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "landmark",
  templateUrl: "./landmark.component.html",
  styleUrls: ["./landmark.component.scss"]
})
export class LandmarkComponent {
  isCollapsed: boolean = true;
  @Input() landmark: any;

  constructor(private modalService: NgbModal) {}
  onClick(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title', centered:true, size: 'xl'}).result.then((result) => {
      console.log('Modal closed!')
     }, (reason) => {
       console.log('Modal cannot close correctly!')
     });
  }
}
