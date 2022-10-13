import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  exports: [
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
})
export default class SharedModule { }
