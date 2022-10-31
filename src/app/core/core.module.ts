import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import IconService from 'src/app/core/services/icon/icon.service';
import HeaderComponent from 'src/app/core/components/header/header.component';
import LogoComponent from 'src/app/core/components/header/logo/logo.component';
import SharedModule from 'src/app/shared/shared.module';
import SettingsButtonComponent from 'src/app/core/components/header/settings-button/settings-button.component';
import SearchFormComponent from 'src/app/core/components/header/search-form/search-form.component';
import SearchService from 'src/app/core/services/search/search.service';
import SortingService from 'src/app/core/services/sorting/sorting.service';
import NotFoundComponent from 'src/app/core/components/not-found/not-found.component';
import AuthService from 'src/app/core/services/auth/auth.service';
import AuthGuard from 'src/app/features/auth/guards/auth.guard';
import ProfileComponent from 'src/app/core/components/header/profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import YoutubeInterceptor from 'src/app/core/interceptors/youtube.interceptor';

@NgModule({
  providers: [IconService, SearchService, SortingService, AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptor, multi: true,
  }],
  declarations: [
    HeaderComponent,
    LogoComponent,
    SettingsButtonComponent,
    SearchFormComponent,
    NotFoundComponent,
    ProfileComponent,
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
