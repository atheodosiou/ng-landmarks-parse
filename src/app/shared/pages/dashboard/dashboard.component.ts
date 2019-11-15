import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LandmarkService } from '../../services/landmark.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import * as Parse from 'parse';
// Creates uuids
import * as uuid from 'uuid/v4';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/Toast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  //Variable declarations
  landmarkForm: FormGroup;
  selectedLandmark: Parse.Object;
  selectedLandmarkPhoto: Parse.File;
  landmarks: Parse.Object[];
  fileName = '';
  photoToBeUploaded: File;

  //Used to get the referentce of the modal html template
  @ViewChild('modal', { static: false }) modal: ElementRef

  constructor(private landmarkService: LandmarkService, private formBuilder: FormBuilder, private modalService: NgbModal,
    private toasterService:ToastService
    ) {
    // Initialization of reactive form
    this.landmarkForm = this.formBuilder.group({
      title: new FormControl('Landmark\'s Title', Validators.required),
      shortInfo: new FormControl('Landmark\'s Short Info', Validators.required),
      description: new FormControl('Landmark\'s Description', Validators.required)
    });
  }

  ngOnInit() {
    //Retrieving all landmarks
    this.landmarkService.getLandmarks().then(landmarks => {
      this.landmarks = landmarks;
      console.log(landmarks);
    }).catch(error => console.error(error));
  }

  onLandmarkSelect(landmarkID: string) {
    // Finds the selected landmark based on user selection and sets value on the form
    this.selectedLandmark = this.landmarks.find((l: Parse.Object) => l.id === landmarkID);
    this.landmarkForm.setValue({
      title: this.selectedLandmark.attributes.title,
      shortInfo: this.selectedLandmark.attributes.short_info,
      description: this.selectedLandmark.attributes.description
    });
    this.selectedLandmarkPhoto = this.selectedLandmark.get("photo");
  }

  handleFileInput(files: any) {
    this.photoToBeUploaded = files.item(0);
    if (this.landmarkService.isFileSizeAccepted(files.item(0).size)) {
      this.fileName = files.item(0).name;
      this.photoToBeUploaded = files.item(0);
    } else {
      this.toasterService.show('The size of the image is not accepted!', { classname: 'bg-danger text-light', delay: 1500 });
      if (this.photoToBeUploaded) {
        this.photoToBeUploaded = null;
        this.fileName = 'Choose file';
      }
    }
  }

  //Handle form submit
  onSubmit(value: any) {
    this.showModal(this.modal);
    if (this.photoToBeUploaded && this.selectedLandmark) {
      // set unique name for the file
      // I am doing this in order not to check for valid file names ....
      // Parse does not accept some special chars...
      const photo = new Parse.File(uuid(), this.photoToBeUploaded);
      photo.save().then(uploadedPhoto => {
        this.toasterService.show(`Photo uploaded successfuly!`, { classname: 'bg-success text-light', delay: 1000 });
        // Update selected landmark with the form's data and file
        this.updateSelectedLandMark(uploadedPhoto).then((parseObject: Parse.Object) => {
          this.updateForm(parseObject);
          this.modalService.dismissAll();
        }).catch(error => {
          this.modalService.dismissAll();
          this.landmarkService.showError('Update on selected landmar failed!',error);
        });
      }).catch(error => {
        this.modalService.dismissAll();
        this.landmarkService.showError('Photo upload failed!',error);
      })
    } else {
      // Update selected landmark with the form's data only
      this.updateSelectedLandMark().then((parseObject: Parse.Object) => {
        this.updateForm(parseObject);
        this.modalService.dismissAll();
        this.toasterService.show(`Photo uploaded successfuly!`, { classname: 'bg-success text-light', delay: 1000 });
      }).catch(error => {
        this.modalService.dismissAll();
        this.landmarkService.showError('Photo upload failed!',error);
      });
    }
  }

  private async updateSelectedLandMark(newFile?: Parse.File): Promise<Parse.Object | null> {
    return new Promise<Parse.Object | null>((resolve, reject) => {
      const object = null;
      this.selectedLandmark.set('title', this.landmarkForm.value.title);
      this.selectedLandmark.set('short_info', this.landmarkForm.value.shortInfo);
      this.selectedLandmark.set('description', this.landmarkForm.value.description);

      if (newFile) {
        this.selectedLandmark.set('photo', newFile)
      }

      this.selectedLandmark.save().then(updatedObject => {
        console.log('Landmard updated!\n', updatedObject);
        resolve(updatedObject);
      }).catch(error => {
        console.error('Something went wrong!', error);
        reject(error);
      });
    });
  }

  //Setting value to reactive form
  private updateForm(object: Parse.Object) {
    this.selectedLandmark = object;
    this.landmarkForm.setValue({ title: object.attributes.title, shortInfo: object.attributes.short_info, description: object.attributes.description });
    if (object.attributes.photo) {
      this.fileName = object.get('photo.name');
    }
  }


  private showModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', centered: true, size: 'lg' }).result.then((result) => {
      console.log('Modal closed!')
    }, (reason) => {
      console.log('Modal cannot close correctly!')
    });
  }

  //
  onRemovePhoto(file: Parse.File) {
    console.log(file);
  }

}
