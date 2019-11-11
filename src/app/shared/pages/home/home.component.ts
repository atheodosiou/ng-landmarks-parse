import { Component, OnInit } from "@angular/core";
import { LandmarkService } from "../../services/landmark.service";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private landmarkService: LandmarkService) {}
  
  landmarks:any[];
  selectedLandmark={attributes:{title:'Dubai',location:{latitude:25.2050773,longitude:55.2623135}}};
  lat = 51.678418;
  lng = 7.809007;
  zoom=13;
  
  ngOnInit() {
    console.log(this.selectedLandmark)
    console.log('Get landmarks...');
    // this.landmarkService.getData().subscribe(data=>{
    //   this.landmarks=data.landmarks;
    //   this.landmarkService.landmarks=data.landmarks;
    //   console.log( this.landmarkService.landmarks)
    // });
  this.landmarkService.getLandmarks().then((landmarks)=>{
    this.landmarks = landmarks;
    this.landmarkService.landmarks=landmarks;
    console.log(landmarks)
  }).catch(error=>{
    console.log(error)
  });
  
  // console.log('Get one landmark...');
  // this.landmarkService.getLandmark('aWN0HS8Hm0').then(landmark=>{console.log(JSON.stringify(landmark.attributes))}).catch(error=>{console.log(error)});
  }

  // private sortBy(array: Landmark[]): Landmark[] {
  //   return array.sort((a: Landmark, b: Landmark) =>
  //     a.order > b.order ? 1 : -1
  //   );
  // }

  onLandmarkSelect(landmark:any){
    this.selectedLandmark=landmark;
    console.log('Selected landmark:',landmark.attributes.location.latitude, landmark.attributes.location.longitude)
  }
}
