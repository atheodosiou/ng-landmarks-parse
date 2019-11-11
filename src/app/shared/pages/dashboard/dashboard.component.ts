import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../../services/landmark.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  landmarkForm: FormGroup;
  selectedLandmark: Parse.Object;
  landmarks: Parse.Object[];

  constructor(private landmarkService: LandmarkService, private formBuilder: FormBuilder) {
    this.landmarkForm = this.formBuilder.group({
      id: new FormControl('Landmark\'s ID',{validators: Validators.required}),
      title: new FormControl('Landmark\'s Title',{validators: Validators.required}),
      shortInfo: new FormControl('Landmark\'s Short Info',{validators: Validators.required}),
      description: new FormControl('Landmark\'s Description',{validators: Validators.required}),
      file: new FormControl(),
    });
  }

  ngOnInit() {
    this.landmarkService.getLandmarks().then(landmarks => {
      this.landmarks = landmarks;
      console.log(landmarks);
    }).catch(error => console.error(error));
  }

  onLandmarkSelect(landmark: Parse.Object) {
    this.selectedLandmark = landmark;
    this.landmarkForm.setValue({ id: this.selectedLandmark.id, title: this.selectedLandmark.attributes.title, shortInfo: this.selectedLandmark.attributes.short_info, description: this.selectedLandmark.attributes.description, file: null });
  }

  handleFileInput(files: any) {
    // this.landmarkService.fileUpload(files.item(0))
    this.landmarkForm.setValue({ id: this.selectedLandmark.id, title: this.selectedLandmark.attributes.title, shortInfo: this.selectedLandmark.attributes.short_info, description: this.selectedLandmark.attributes.description, file: files.item(0) });
  }

  onSubmit(value: any) {
    console.log(value);
  }
}
