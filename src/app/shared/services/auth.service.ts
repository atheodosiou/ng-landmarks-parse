import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Parse from 'parse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    Parse.initialize('instashopInterviewAppId');
    (Parse as any).serverURL='http://localhost:4242/parse';
  }

  private sessionToken:string;
  user:Parse.User;
  isLogedIn:boolean=false;

  login(username: string, password: string):Promise<Parse.User>{
    return new Promise<Parse.User>((resolve,reject)=>{
      Parse.User.logIn(username, password).then((user:Parse.User) => {
        this.sessionToken = user.attributes.sessionToken;
        this.user=user;
        this.isLogedIn=true;
        resolve(user);
      }).catch(error => {
        reject(error);
      });
    });
  }

  logOut(){
   
    if(Parse.User.current()){
      Parse.User.logOut().then(() => {
        var currentUser = Parse.User.current();  // this will now be null
        console.log(currentUser);
      });

      // Parse.User.logOut().then(user=>{
      //   console.log('User logout was successful!');
      //   this.user=null;
      //   this.isLogedIn=false;
      //   this.sessionToken=null;
      // }).catch(error=>{
      //   console.error(error);
      // })
    }
  }
}
