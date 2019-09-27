import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album/album.component';
import { ShareModule } from '../share/share.module';
import { AddAlbumComponent } from './add-album/add-album.component';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from '../guard.service';

const routes: Routes = [
  {
    path: 'admin/add', canActivate: [GuardService], component: AddAlbumComponent 
  },
]

@NgModule({
  
  imports: [
    CommonModule,
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlbumComponent, AddAlbumComponent],
  exports: [AlbumComponent, RouterModule]
})
export class AdminModule { }
