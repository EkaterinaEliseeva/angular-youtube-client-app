import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import HighlightPublicationStatusDirective from 'src/app/core/directives/highlight-publication-status.directive';
import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import SearchFormComponent from './core/components/header/search-form/search-form.component';
import SettingsButtonComponent from './core/components/header/settings-button/settings-button.component';
import ProfileComponent from './core/components/header/profile/profile.component';
import SearchItemComponent from './core/components/search-results/search-item/search-item.component';
import SearchResultsComponent from './core/components/search-results/search-results.component';
import SortingComponent from './core/components/sorting/sorting.component';
import LogoComponent from './core/components/header/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SearchFormComponent,
    SortingComponent,
    ProfileComponent,
    SettingsButtonComponent,
    LogoComponent,
    HighlightPublicationStatusDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
