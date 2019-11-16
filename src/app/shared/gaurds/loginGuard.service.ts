import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AuthLoggedOutAction, AuthLoggedInAction } from 'src/store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    console.log('Is loged in:', this.authService.isLogedIn)
    if (this.authService.isLogedIn) {
      this.router.navigate(['/home']);
      // this.store.dispatch(new AuthLoggedOutAction())
      return false;
    } else {
      // this.store.dispatch(new AuthLoggedInAction())
      return true;
    }
  }
}
