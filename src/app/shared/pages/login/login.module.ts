import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login.component";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastsContainer } from '../../components/toaster/toaster-container.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToasterModule } from '../../components/toaster/toaster.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: LoginComponent
      }
    ]),
    ToasterModule
  ],
  declarations: [LoginComponent,],
  exports: [LoginComponent]
})
export class LoginModule {}
