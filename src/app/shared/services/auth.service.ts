import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Parse from 'parse';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ToastService } from './Toast.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';
import { AuthLoggedInAction, AuthLoggedOutAction } from 'src/store/actions/auth.actions';

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

  login(username: string, password: string): Promise<Parse.User> {
    console.log('login')
    return new Promise<Parse.User>((resolve, reject) => {
      Parse.User.logIn(username, password).then((user: Parse.User) => {
        this.sessionToken = user.attributes.sessionToken;
        // if(!window.localStorage.getItem('sessionToken')){
        window.localStorage.setItem('sessionToken', this.sessionToken);
        // }
        this.user = user;
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
      this.router.navigate(['/home']);
    }
    this.toasterService.show('Loged out successfully!', { classname: 'bg-danger text-light', delay: 1500 });
    this.store.dispatch(new AuthLoggedOutAction())
    // if(Parse.User.current()){
    //   Parse.User.logOut().then(() => {
    //     var currentUser = Parse.User.current();  // this will now be null
    //     console.log(currentUser);
    //   });

    // Parse.User.logOut().then(user=>{
    //   console.log('User logout was successful!');
    //   this.user=null;
    //   this.isLogedIn=false;
    //   this.sessionToken=null;
    // }).catch(error=>{
    //   console.error(error);
    // })
    // }
  }
}
