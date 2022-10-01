import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header/header.component';
import SearchItemComponent from './search/search-item/search-item.component';
import SearchResultsComponent from './search/search-results/search-results.component';
import SearchFormComponent from './search/search-form/search-form.component';
import SearchSortComponent from './search/search-sort/search-sort.component';
import { ProfileComponent } from './profile/profile/profile.component';

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
