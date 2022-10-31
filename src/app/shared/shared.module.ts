import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import ControlComponent from './components/control/control.component';
import DateControlComponent from './components/date-control/date-control.component';

@NgModule({
  declarations: [
    ControlComponent,
    DateControlComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ControlComponent,
    DateControlComponent,
  ],
})
export default class SharedModule { }
