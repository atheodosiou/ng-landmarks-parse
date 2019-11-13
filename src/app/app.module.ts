import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { LandmarkService } from "./shared/services/landmark.service";
import { AuthService } from './shared/services/auth.service';
import { ToastService } from './shared/services/Toast.service';

@NgModule({
  declarations: [AppComponent,],
  imports: [BrowserModule, AppRoutingModule, SharedModule, NgbModule,],
  providers: [LandmarkService, AuthService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {}
