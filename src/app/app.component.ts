import { Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { environment } from 'src/environments/environment';
import * as Parse from 'parse';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(private router: Router, private authService: AuthService) {
    Parse.initialize(environment.appId);
    (Parse as any).serverURL = environment.serverURL;
    console.log('PARSE INITIALIZED')
  }
  title = "parse-dashboard";
}
