import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingModule } from '../../components/loading/loading.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: DashboardComponent
      }
    ]),
    NgbDropdownModule,
    ReactiveFormsModule,
    LoadingModule
  ],
  exports:[DashboardComponent],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
