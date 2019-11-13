import { Component, OnInit } from "@angular/core";
import { LandmarkService } from "../../services/landmark.service";
import { ToastService } from '../../services/Toast.service';

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private landmarkService: LandmarkService, private toastService:ToastService) {}
  
  landmarks:any[];
  selectedLandmark={attributes:{title:'Dubai',location:{latitude:25.2050773,longitude:55.2623135}}};
  zoom=13;
  
  ngOnInit() {
  this.landmarkService.getLandmarks().then((landmarks)=>{
    this.landmarks = landmarks;
    this.landmarkService.landmarks=landmarks;
    console.warn('Landmarks loaded correctly!')
  }).catch(error=>{
    this.toastService.show(`Landmarks could not be loaded successfully! Reason: ${error.message}`,{ classname: 'bg-danger text-light', delay: 1500 });
  });
  }

  // private sortBy(array: Landmark[]): Landmark[] {
  //   return array.sort((a: Landmark, b: Landmark) =>
  //     a.order > b.order ? 1 : -1
  //   );
  // }

  onLandmarkSelect(landmark:any){
    this.selectedLandmark=landmark;
  }
}
