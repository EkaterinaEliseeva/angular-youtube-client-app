import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import IconService from 'src/app/core/services/icon/icon.service';
import HeaderComponent from 'src/app/core/components/header/header.component';
import LogoComponent from 'src/app/core/components/header/logo/logo.component';
import ProfileComponent from 'src/app/core/components/header/profile/profile.component';
import SharedModule from 'src/app/shared/shared.module';
import SettingsButtonComponent from 'src/app/core/components/header/settings-button/settings-button.component';
import SearchFormComponent from 'src/app/core/components/header/search-form/search-form.component';
import SearchService from 'src/app/core/services/search/search.service';
import SortingService from 'src/app/core/services/sorting/sorting.service';

@NgModule({
  providers: [IconService, SearchService, SortingService],
  declarations: [
    HeaderComponent,
    LogoComponent,
    ProfileComponent,
    SettingsButtonComponent,
    SearchFormComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export default class CoreModule {
}
