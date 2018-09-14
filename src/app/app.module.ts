import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

//Plugins
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSoundmanager2Module } from 'ngx-soundmanager2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import {NgxPaginationModule} from 'ngx-pagination';

library.add(fas);

// Routing 
import { routes } from './routes';
// Services
import { ApiService } from '../services/api.service'
import { LoginService } from '../services/login.service';
import { AdminService } from '../services/admin.service';
import { HomeService } from '../services/home.service';
import { MusicDetailedService } from '../services/music-detailed.service';
import { MusicsByGenreService } from '../services/musics-by-genre.service';
// Components
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlayerComponent } from './account/additional/player/player.component';
import { AsideComponent } from './account/additional/aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './account/home/home.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMusicsComponent } from './admin/musics/admin-musics.component';
import { LoginComponent } from './login/login.component';
import { MusicsComponent } from './account/musics/musics.component';
import { MusicDetailedComponent } from './account/additional/music-detailed/music-detailed.component';
import { MusicsByGenreComponent } from './account/additional/musics-by-genre/musics-by-genre.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LandingPageComponent,
    PlayerComponent,
    AsideComponent,
    NavComponent,
    RegisterComponent,
    HomeComponent,
    AccountComponent,
    AdminComponent,
    AdminMusicsComponent,
    LoginComponent,
    MusicsComponent,
    MusicDetailedComponent,
    MusicsByGenreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxSoundmanager2Module.forRoot(),
    NgxPaginationModule,
    HttpModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApiService,
    LoginService,
    AdminService,
    HomeService,
    MusicDetailedService,
    MusicsByGenreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
