import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import SharedModule from 'src/app/shared/shared.module';
import AdminComponent from './admin.component';
import CreateFormComponent from './create-form/create-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    CreateFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export default class AdminModule { }
