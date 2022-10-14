import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    FormsModule,
    RouterModule,
  ],
})
export default class SharedModule { }
