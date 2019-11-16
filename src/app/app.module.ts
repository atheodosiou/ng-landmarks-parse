import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { LandmarkService } from "./shared/services/landmark.service";
import { AuthService } from './shared/services/auth.service';
import { ToastService } from './shared/services/Toast.service';
import { ToasterModule } from './shared/components/toaster/toaster.module';
import { StoreModule } from "@ngrx/store";
import { AuthReducer } from 'src/store/reducers/auth.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(
    {
      auth: AuthReducer
    }
  ), SharedModule, NgbModule, ToasterModule, StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })],
  providers: [LandmarkService, AuthService, ToastService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
