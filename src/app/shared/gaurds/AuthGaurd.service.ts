import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';
import { AuthLoggedInAction, AuthLoggedOutAction } from 'src/store/actions/auth.actions';

@Injectable({
  providedIn: "root"
})
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }
  //Checks if a user id logde in else stops the navigation and redirects him back to home
  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    console.log('Gaurd works!')
    console.log('Is loged in:', this.authService.isLogedIn)
    if (!this.authService.isLogedIn) {
      this.router.navigate(['/home']);
      // this.store.dispatch(new AuthLoggedInAction())
      return false;
    } else {
      // this.store.dispatch(new AuthLoggedOutAction())
      return true;
    }
  }
}
