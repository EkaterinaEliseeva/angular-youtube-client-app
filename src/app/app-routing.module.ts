import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthComponent from 'src/app/features/auth/auth.component';
import YoutubeComponent from 'src/app/features/youtube/youtube.component';
import NotFoundComponent from 'src/app/core/components/not-found/not-found.component';
import DetailedPageComponent from 'src/app/features/youtube/pages/detailed-page/detailed-page.component';
import AuthGuard from 'src/app/features/auth/guards/auth.guard';
import AdminComponent from 'src/app/features/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.module').then((m) => m.default),
    component: AuthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'main',
    loadChildren: () => import('./features/youtube/youtube.module').then((m) => m.default),
    component: YoutubeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then((m) => m.default),
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'video/:id',
    loadChildren: () => import('./features/youtube/youtube.module').then((m) => m.default),
    component: DetailedPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export default class AppRoutingModule { }
