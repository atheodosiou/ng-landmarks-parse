import { Injectable } from '@angular/core';
import * as Parse from 'parse';
import { Router } from '@angular/router';
import { ToastService } from './Toast.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';
import { AuthLoggedOutAction } from 'src/store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private toasterService: ToastService, private store: Store<AppState>) {
    // Parse.initialize(environment.appId,environment.javaScriptKey);
    // (Parse as any).serverURL=environment.serverURL;
  }

  private sessionToken: string;
  user: Parse.User;
  private _isLogedIn: boolean = false;

  set isLogedIn(value: boolean) {
    this._isLogedIn = value;
  }

  get isLogedIn() {
    if (window.localStorage.getItem('sessionToken')) {
      this._isLogedIn = true;
    } else {
      this._isLogedIn = false;
    }
    return this._isLogedIn;
  }

  /**
   * Used to login a use with the provided credentials
   * @param username Users credentials
   * @param password Users credentials
   */
  login(username: string, password: string): Promise<Parse.User> {
    return new Promise<Parse.User>((resolve, reject) => {
      Parse.User.logIn(username, password).then((user: Parse.User) => {
        this.sessionToken = user.attributes.sessionToken;
        window.localStorage.setItem('sessionToken', this.sessionToken);
        this._isLogedIn = true;
        resolve(user);
      }).catch(error => {
        reject(error);
      });
    });
  }

  logOut() {
    if (window.localStorage.getItem('sessionToken')) {
      window.localStorage.removeItem('sessionToken');
      this._isLogedIn = false;
      this.store.dispatch(new AuthLoggedOutAction())
      this.toasterService.show('Loged out successfully!', { classname: 'bg-danger text-light', delay: 1500 });
      this.router.navigate(['/home']);

      // Returns Error => Database adapter error!!!


      // Parse.User.logOut().then((data) => {
      //   console.log(data);
      // }).catch(error => {
      //   this.toasterService.show(`Logout failed! Reason: ${error.message}`, { classname: 'bg-danger text-light', delay: 2500 });
      // });
    }
  }
}
