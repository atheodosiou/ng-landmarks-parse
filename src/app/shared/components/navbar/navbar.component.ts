import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Input, OnChanges } from "@angular/core";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit{
  
  // TO-DO
  // I have to update the logedIn stare in order to chande the navbar links!
  @Input() logedIn=false;

  constructor(private authService:AuthService, 
    // private cdr:ChangeDetectorRef
    ) {
      // this.logedIn = this.authService.isLogedIn;
  }

  ngOnInit() {
    this.logedIn = this.authService.isLogedIn;
    console.log(this.logedIn)
  }

  logOut(){
    this.authService.logOut();
    this.logedIn = this.authService.isLogedIn;
    // this.cdr.detectChanges();
  }
}
