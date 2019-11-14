import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: "root"
})
export class AuthGaurd implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    console.log('Gaurd works!')
    console.log('Is loged in:', this.authService.isLogedIn)
    if (!this.authService.isLogedIn) {
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }

  }

}
