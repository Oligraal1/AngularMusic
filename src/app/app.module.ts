import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { SearchComponent } from './search/search.component';
import { AlbumDescriptionComponent } from './album-description/album-description.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from'@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaginateComponent } from './paginate/paginate.component';
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDc21Kfrzkv8joy4N5egzvO4-9RdHjBWXA",
  authDomain: "ilovemymusic.firebaseapp.com",
  databaseURL: "https://ilovemymusic.firebaseio.com",
  projectId: "ilovemymusic",
  storageBucket: "ilovemymusic.appspot.com",
  messagingSenderId: "907371331380",
  appId: "1:907371331380:web:8f3d29571302ae084b6f61",
  measurementId: "G-G4JE3XTK9H"
};
firebase.initializeApp(firebaseConfig);

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
];

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    SearchComponent,
    AlbumDescriptionComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    PaginateComponent,
    AudioPlayerComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(albumsRoutes),
    AngularFontAwesomeModule,
    NgbModule,
    HttpClientModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
