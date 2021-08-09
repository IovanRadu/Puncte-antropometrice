import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ServiceRadiografie } from './service-radiografie.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RadiografieComponent } from './radiografie/radiografie.component';
import {RadiographyService} from "./services/radiography.service";

@NgModule({
  declarations: [
    AppComponent,
    RadiografieComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceRadiografie,
    RadiographyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
