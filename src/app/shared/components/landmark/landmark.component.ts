import { Component, Input, Output, EventEmitter } from "@angular/core";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: "landmark",
  templateUrl: "./landmark.component.html",
  styleUrls: ["./landmark.component.scss"]
})
export class LandmarkComponent {
  isCollapsed: boolean = true;
  @Input() landmark: any;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  constructor(private modalService: NgbModal) { }
  onClick(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
      console.log('Modal closed!')
    }, (reason) => {
      console.log('Modal cannot close correctly!')
    });
  }

  onLandmarkClick() {
    this.onSelect.emit(this.landmark);
  }
}
