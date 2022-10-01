import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './core/components/header/header.component';
import SearchItemComponent from './core/components/search-item/search-item.component';
import SearchResultsComponent from './core/components/search-results/search-results.component';
import SearchFormComponent from './core/components/search-form/search-form.component';
import SearchSortComponent from './core/components/search-sort/search-sort.component';
import ProfileComponent from './core/components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchItemComponent,
    SearchResultsComponent,
    HeaderComponent,
    SearchFormComponent,
    SearchSortComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule {}
