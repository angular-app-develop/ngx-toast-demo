import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastService } from 'ngx-toast';
import { ToastModule } from 'ngx-toast';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastModule.forRoot()
  ],
  providers: [
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
