import { Injectable } from "@angular/core";
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class LandmarkService {
  constructor(private http: HttpClient) {
    Parse.initialize(environment.appId);
    (Parse as any).serverURL = environment.serverURL;
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

  getData(): Observable<any> {
    return this.http.get('../../assets/data/landmarks.json')
  }

  fileUpload(file:File){
    if(file){
      const parseFile=new Parse.File(file.name,file);
      parseFile.save().then(data=>{console.log('File uploaded to parse server!',data)}).catch(error=>{console.log('Could not updoad the file!')});
    }else{
      console.log('File needed!');
    }
  }
}
