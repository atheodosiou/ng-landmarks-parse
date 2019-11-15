import { Injectable } from "@angular/core";
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToastService } from './Toast.service';

@Injectable({
  providedIn: "root"
})
export class LandmarkService {
  constructor(private toastService:ToastService) {
  }

  private _landmarks: any[];

  get landmarks(): any[] {
    return this._landmarks
  }
  set landmarks(value: any[]) {
    this._landmarks = value;
  }

  getLandmarks(): Promise<Parse.Object[]> {
    var Landmarks = Parse.Object.extend("Landmarks");
    var query = new Parse.Query(Landmarks);
    query.ascending('order');
    return new Promise<Parse.Object[]>((resolve, reject) => {
      query.find()
        .then((landmarks) => {
          resolve(landmarks);
        }, (error) => {
          reject(error);
        });
    });
  }

  getLandmark(objectId: string): Promise<Parse.Object> {
    var Landmarks = Parse.Object.extend("Landmarks");
    var query = new Parse.Query(Landmarks);
    return new Promise<Parse.Object>((resolve, reject) => {
      query.get(objectId)
        .then((landmark) => {
          resolve(landmark);
        }, (error) => {
          reject(error);
        });
    });
  }


  fileUpload(file:File){
    if(file){
      const parseFile=new Parse.File(file.name,file);
      parseFile.save().then(data=>{console.log('File uploaded to parse server!',data)}).catch(error=>{console.log('Could not updoad the file!')});
    }else{
      console.log('File needed!');
    }
  }

  //Validates image file size
  isFileSizeAccepted(fileSize: number): boolean {
    const size = Math.round((fileSize / 1024));
    if (size <= 5120) {
      // file smaller than or equal to 5Mbytes
      return true;
    } else {
      // file grater than 5Mbytes
      return false;
    }
  }

  showError(message:string,error?){
    if(error){
      this.toastService.show(`${message} Reason: ${error.message || error}`, { classname: 'bg-danger text-light', delay: 1500 })
    }else{
    this.toastService.show(`${message}`, { classname: 'bg-danger text-light', delay: 1500 });
    }
  }
}
