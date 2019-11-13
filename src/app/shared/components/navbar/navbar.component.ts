import { Component, OnInit,Input } from "@angular/core";
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

  constructor(private authService:AuthService) {}

  ngOnInit() {
    this.logedIn = this.authService.isLogedIn;
  }

  logOut(){
    this.authService.logOut();
  }
}
