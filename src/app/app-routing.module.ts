import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { AlbumComponent } from './admin/album/album.component';

const albumsRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'album/:id',
    component: AlbumDescriptionComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'admin',
    component: AlbumComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(albumsRoutes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
