import { Component, OnInit } from '@angular/core';
import { LandmarkService } from '../../services/landmark.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private landmarkService:LandmarkService) { }
  landmarks:any[];
  ngOnInit() {
    this.landmarkService.getLandmarks().then(landmarks=>{
      this.landmarks=landmarks;
      console.log(landmarks);
    }).catch(error=>console.error(error));
  }

  onLandmarkSelect(landmark){
    console.log(landmark);
  }
}
