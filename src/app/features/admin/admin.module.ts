import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from 'src/app/shared/shared.module';
import AdminComponent from './admin.component';

@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export default class AdminModule { }
