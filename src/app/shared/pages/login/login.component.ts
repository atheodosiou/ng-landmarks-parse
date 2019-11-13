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
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router,
    public toastService: ToastService) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  loginForm: FormGroup;

  ngOnInit() {
    this.showSuccess();
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 800 });
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 15000 });
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
