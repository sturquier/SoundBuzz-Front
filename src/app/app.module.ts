import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Plugins
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { NgxSoundmanager2Module } from 'ngx-soundmanager2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';

library.add(fas);

// Routing 
import { routes } from './routes';
// Components
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlayerComponent } from './account/additional/player/player.component';
import { AsideComponent } from './account/additional/aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
// Modules
import { HomeModule } from './account/home/home.module'
import { MusicsByGenreModule } from './account/musics-by-genre/musics-by-genre.module'
import { AdminMusicsModule } from './admin/musics/admin-musics.module'
import { MusicDetailedModule } from './account/music-detailed/music-detailed.module'
// Services
import { ApiService } from '../services/api.service'
import { LoginService } from './login/login.service'
import { RegisterService } from './register/register.service'

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LandingPageComponent,
    PlayerComponent,
    AsideComponent,
    NavComponent,
    RegisterComponent,
    AccountComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxSoundmanager2Module.forRoot(),
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes),
    NgxMyDatePickerModule.forRoot(),
    HomeModule,
    MusicsByGenreModule,
    MusicDetailedModule,
    AdminMusicsModule,
  ],
  providers: [
    ApiService,
    LoginService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
