import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../../services/landmark.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import * as Parse from 'parse';
//Creates uuids
import * as uuid from 'uuid';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  landmarkForm: FormGroup;
  selectedLandmark: Parse.Object;
  landmarks: Parse.Object[];
  fileName = '';
  photoToBeUploaded: File;

  constructor(private landmarkService: LandmarkService, private formBuilder: FormBuilder) {
    //Initiallize Parse
    Parse.initialize(environment.appId);
    (Parse as any).serverURL = environment.serverURL;

    this.landmarkForm = this.formBuilder.group({
      title: new FormControl('Landmark\'s Title', Validators.required),
      shortInfo: new FormControl('Landmark\'s Short Info', Validators.required),
      description: new FormControl('Landmark\'s Description', Validators.required)
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
    this.landmarkForm.setValue({ title: this.selectedLandmark.attributes.title, shortInfo: this.selectedLandmark.attributes.short_info, description: this.selectedLandmark.attributes.description });
  }

  handleFileInput(files: any) {
    this.photoToBeUploaded = files.item(0);
    console.log(files.item(0))
    if (this.isFileSizeAccepted(files.item(0).size)) {
      this.fileName = files.item(0).name;
      this.photoToBeUploaded = files.item(0);
    } else {
      console.log('File size not accepted!');
      alert('File size not accepted!');
      if (this.photoToBeUploaded) {
        this.photoToBeUploaded = null;
        this.fileName = 'Choose file';
      }
    }
  }

  onSubmit(value: any) {
    // console.log('Form data:',this.landmarkForm.value);
    if (this.photoToBeUploaded && this.selectedLandmark) {
      
      //set unique name for the file
      //I am doing this in order not to check for valid file names ....
      //Parse does not accept some special chars...

      let photo = new Parse.File(uuid(), this.photoToBeUploaded);
      photo.save().then(uploadedPhoto => {
        console.log('Photo uploaded successfuly!',uploadedPhoto);
        //Update selected landmark with the form's data and file
        this.updateSelectedLandMark(uploadedPhoto).then((parseObject:Parse.Object)=>{
          this.updateForm(parseObject);
        }).catch(error=>{
          console.error(error)
        });
      }).catch(error => { console.error(error) })
    } else {
      //Update selected landmark with the form's data only
      this.updateSelectedLandMark().then((parseObject:Parse.Object)=>{
        this.updateForm(parseObject);
      }).catch(error=>{
        console.error(error);
      });
    }
  }

  private async updateSelectedLandMark(newFile?: Parse.File):Promise<Parse.Object | null> {
    return new Promise<Parse.Object | null>((resolve,reject)=>{
      let object=null;
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

  private updateForm(object:Parse.Object){
    console.log('Updating form...')
    this.selectedLandmark=object;
    this.landmarkForm.setValue({ title: object.attributes.title, shortInfo: object.attributes.short_info, description: object.attributes.description });
    if(object.attributes.photo){
      this.fileName='Choose a new photo to replace the existing';
    }
    console.log('Form updated!')
  }

  private isFileSizeAccepted(fileSize: number): boolean {
    const size = Math.round((fileSize / 1024));
    if (size <= 5120) {
      console.log('file smaller than or equal to 5Mbytes')
      return true;
    } else {
      console.log('file grater than 5Mbytes')
      return false;
    }
  }

  
}
