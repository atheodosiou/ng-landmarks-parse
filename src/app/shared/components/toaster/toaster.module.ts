import { NgModule } from "@angular/core";
import { ToastsContainer } from './toaster-container.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../services/Toast.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations:[ToastsContainer],
    imports:[NgbToastModule,CommonModule,FormsModule],
    exports:[ToastsContainer,NgbToastModule]
})
export class ToasterModule{}