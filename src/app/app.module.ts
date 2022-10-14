import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import CoreModule from 'src/app/core/core.module';
import AppRoutingModule from 'src/app/app-routing.module';
import AppComponent from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
