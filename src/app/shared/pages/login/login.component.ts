import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from '../../services/Toast.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/models/appState.model';
import { AuthLoggedInAction, AuthLoggedOutAction } from 'src/store/actions/auth.actions';

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router,
    public toastService: ToastService, private store: Store<AppState>) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  loginForm: FormGroup;

  onSubmit(value: any) {
    this.authService.login(value.username, value.password).then(
      (user: Parse.User) => {
        this.store.dispatch(new AuthLoggedInAction())
        this.toastService.show(`Welcome ${user.getUsername()}!`, { classname: 'bg-success text-light', delay: 1000 });
        this.router.navigate(['/home']);
      }
    ).catch(error => {
      this.store.dispatch(new AuthLoggedOutAction())
      this.toastService.show(`Login failed! Reason: ${error.message}`, { classname: 'bg-danger text-light', delay: 1500 });
    });
  }
}
