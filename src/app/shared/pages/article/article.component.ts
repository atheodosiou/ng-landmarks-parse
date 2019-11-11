import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { LandmarkService } from '../../services/landmark.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
    this.route.params.subscribe(params => {
      const landmarkId = params['landmarkId'];
      console.log(landmarkId)

      if(this.landmarkService.landmarks){
        this.landmark = this.landmarkService.landmarks.find(l=>l.id === landmarkId);
        console.log(this.landmark)
      }else{
        console.log('Landmarks does not exists!')
        this.landmarkService.getLandmark(landmarkId).then(l=>{
          this.landmark=l
        }).catch(error=>{
          console.log('Cannot get landmark by ID!')
        });
      }
    });    

   
  }

}
