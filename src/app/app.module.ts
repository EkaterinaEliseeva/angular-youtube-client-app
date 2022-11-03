import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import CoreModule from 'src/app/core/core.module';
import AppRoutingModule from 'src/app/app-routing.module';
import AdminModule from 'src/app/features/admin/admin.module';
import { StoreModule } from '@ngrx/store';
import itemsReducer from 'src/app/redux/reducers/items.reducer';
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
    AdminModule,
    StoreModule.forRoot({
      itemsStore: itemsReducer,
    }),

    CoreModule,
  ],
  bootstrap: [AppComponent],
})
export default class AppModule {}
