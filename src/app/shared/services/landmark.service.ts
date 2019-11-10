import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Landmark } from "../models/landmark.model";
import { HttpClient } from "@angular/common/http";
import * as Parse from 'parse';

@Injectable({
  providedIn: "root"
})
export class LandmarkService {
  constructor() {
    Parse.initialize('instashopInterviewAppId');
    (Parse as any).serverURL='http://localhost:4242/parse';
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
