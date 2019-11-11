import { Component, OnInit } from "@angular/core";
import { LandmarkService } from "../../services/landmark.service";
import { Landmark } from '../../models/landmark.model';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private landmarkService: LandmarkService) {}
  
  landmarks:any[];
  ngOnInit() {
    console.log('Get landmarks...');
    this.landmarkService.getData().subscribe(data=>{
      this.landmarks=data.landmarks;
      this.landmarkService.landmarks=data.landmarks;
      console.log( this.landmarkService.landmarks)
    });
  // this.landmarkService.getLandmarks().then((landmarks)=>{
  //   this.landmarks = landmarks;
  //   console.log(landmarks)
  // }).catch(error=>{
  //   console.log(error)
  // });
  // console.log('Get one landmark...');
  // this.landmarkService.getLandmark('aWN0HS8Hm0').then(landmark=>{console.log(JSON.stringify(landmark.attributes))}).catch(error=>{console.log(error)});
  }

  // private sortBy(array: Landmark[]): Landmark[] {
  //   return array.sort((a: Landmark, b: Landmark) =>
  //     a.order > b.order ? 1 : -1
  //   );
  // }
}
