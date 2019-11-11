import { Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router:Router, private authService:AuthService){
    // this.router.events.subscribe(event=>{
    //   if(event instanceof NavigationEnd) {
    //     console.log('ROUTER EVENT:', event)
    //     console.log(this.authService.isLogedIn)
    //   }     
    // })
  }
  title = "parse-dashboard";
}
