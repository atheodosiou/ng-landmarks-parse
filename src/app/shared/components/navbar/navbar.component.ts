import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';
import { Observable } from 'rxjs';
import { IAuth } from 'src/store/models/IAuth';

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {

  // TO-DO
  // I have to update the logedIn stare in order to chande the navbar links!
  @Input() logedIn = false;

  auth: Observable<IAuth>;

  constructor(private authService: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.logedIn = this.authService.isLogedIn;

    this.auth = this.store.select(state => state.auth)

    this.auth.subscribe(s => console.log(s.isLogged))
  }

  logOut() {
    this.authService.logOut();
  }
}
