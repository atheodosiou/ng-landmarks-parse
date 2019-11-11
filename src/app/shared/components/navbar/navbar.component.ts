import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  logedIn=false;
  constructor(private authService:AuthService, 
    // private cdr:ChangeDetectorRef
    ) {
    this.logedIn = this.authService.isLogedIn;
  }

  ngOnInit() {}

  logOut(){
    this.authService.logOut();
    this.logedIn = this.authService.isLogedIn;
    // this.cdr.detectChanges();
  }
}
