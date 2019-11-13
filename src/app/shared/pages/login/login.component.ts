import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/Toast.service';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router,
    public toastService: ToastService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  loginForm: FormGroup;

  onSubmit(value: any) {
    this.authService.login(value.username, value.password).then(
      (user: Parse.User) => {
        this.toastService.show(`Welcome ${user.getUsername()}!`, { classname: 'bg-success text-light', delay: 1000 });
        this.router.navigate(['/dashboard']);
      }
    ).catch(error => {
      this.toastService.show(`Login failed!\nReason: ${error.message}`, { classname: 'bg-danger text-light', delay: 1200 });
    });
  }

  onLogOut() {
    this.authService.logOut();
  }
}
