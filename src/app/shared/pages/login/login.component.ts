import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  loginForm: FormGroup;

  ngOnInit() {

  }

  onSubmit(value: any) {
    this.authService.login(value.username, value.password).then(
      (user: Parse.User) => {
        console.log('User loged in', user);
        this.router.navigate(['/dashboard']);
      }
    ).catch(error => {
      console.log('Cannot login', error);
    });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
