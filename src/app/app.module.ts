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
import { NgxMyDatePickerModule } from 'ngx-mydatepicker';
import { NgxPaginationModule } from 'ngx-pagination';

library.add(fas);

// Routing 
import { routes } from './routes';
// Services
import { ApiService } from '../services/api.service'
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service'
import { AdminService } from '../services/admin.service';
import { HomeService } from '../services/home.service';
import { MusicDetailedService } from '../services/music-detailed.service';
import { MusicsByGenreService } from '../services/musics-by-genre.service';
import { UserService } from '../services/user.service';
import { MyPlaylistsService } from '../services/my-playlists.service';
import { MyProfileService } from '../services/my-profile.service';
import { AddCommentService } from '../services/add-comment.service';
import { AddMusicService } from '../services/add-music.service';
import { DownloadMusicService } from '../services/download-music.service';
import { AddPlaylistService } from '../services/add-playlist.service';
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
import { AdminHomeComponent } from './admin/home/admin-home.component';
import { AdminUsersComponent } from './admin/users/admin-users.component';
import { AdminViewUsersComponent } from './admin/users/view/admin-view-users.component'
import { AdminEditUserComponent } from './admin/users/edit/admin-edit-user.component';
import { AdminMusicsComponent } from './admin/musics/admin-musics.component';
import { LoginComponent } from './login/login.component';
import { MusicsComponent } from './account/musics/musics.component';
import { MusicDetailedComponent } from './account/additional/music-detailed/music-detailed.component';
import { AddCommentComponent } from './account/additional/music-detailed/add-comment/add-comment.component';
import { MusicsByGenreComponent } from './account/additional/musics-by-genre/musics-by-genre.component';
import { AddMusicComponent } from './account/musics/add-music/add-music.component';
import { AllMusicsComponent } from './account/musics/all-musics/all-musics.component';
import { AllPlaylistsComponent } from './account/playlists/all-playlists/all-playlists.component';
import { AddPlaylistComponent } from './account/playlists/add-playlist/add-playlist.component';
import { ProfileComponent } from './account/profile/profile.component'
import { ViewProfileComponent } from './account/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './account/profile/edit-profile/edit-profile.component';
// Guards
import { LoggedInGuard } from './auth/guards/loggedIn.guard'
import { IsAdminGuard } from './auth/guards/isAdmin.guard'

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
    AdminHomeComponent,
    AdminUsersComponent,
    AdminViewUsersComponent,
    AdminEditUserComponent,
    AdminMusicsComponent,
    LoginComponent,
    MusicsComponent,
    MusicDetailedComponent,
    AddCommentComponent,
    MusicsByGenreComponent,
    AddMusicComponent,
    AllMusicsComponent,
    AllPlaylistsComponent,
    AddPlaylistComponent,
    ProfileComponent,
    ViewProfileComponent,
    EditProfileComponent,
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
    RouterModule.forRoot(routes),
    NgxMyDatePickerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    LoggedInGuard,
    IsAdminGuard,
    ApiService,
    LoginService,
    RegisterService,
    AdminService,
    HomeService,
    MusicDetailedService,
    MusicsByGenreService,
    UserService,
    MyPlaylistsService,
    MyProfileService,
    AddCommentService,
    AddMusicService,
    DownloadMusicService,
    AddPlaylistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
