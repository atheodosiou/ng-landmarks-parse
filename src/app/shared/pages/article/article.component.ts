import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LandmarkService } from '../../services/landmark.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(private route:ActivatedRoute, private landmarkService:LandmarkService) { }
  landmark:any;
  landmarks:any;
  ngOnInit() {
   if(this.landmarkService.landmarks){
    this.route.params.subscribe(params => {
      const landmarkId = params['landmarkId'];
      console.log(landmarkId)
      this.landmark = this.landmarkService.landmarks.find(l=>l._id === landmarkId);
      console.log(this.landmark)
    });    
   }else{
     console.log('Landmarks does not exists!')
   }
  }

}
