import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGaurd implements CanActivate {


  constructor( private authService:AuthService) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean {
    console.log('Gaurd works!')
    if(!this.authService.isLogedIn){
      return false;
    }else{
      return true;
    }
  }

}
