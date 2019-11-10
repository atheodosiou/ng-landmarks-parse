import { Injectable } from "@angular/core";
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class LandmarkService {
  constructor() {
    Parse.initialize(environment.appId);
    (Parse as any).serverURL=environment.serverURL;
  }

  getLandmarks():Promise<Parse.Object[]>{
    var Landmarks = Parse.Object.extend("Landmarks");
    var query = new Parse.Query(Landmarks);
    query.ascending('order');
    return new Promise<Parse.Object[]>((resolve,reject)=>{
      query.find()
      .then((landmarks) => {
        resolve(landmarks);
      }, (error) => {
        reject(error);
      });
    });
  }
  
  getLandmark(objectId:string):Promise<Parse.Object>{
    var Landmarks = Parse.Object.extend("Landmarks");
    var query = new Parse.Query(Landmarks);
    return new Promise<Parse.Object>((resolve,reject)=>{
      query.get(objectId)
      .then((landmark) => {
        resolve(landmark);
      }, (error) => {
        reject(error);
      });
    });
  }
}
