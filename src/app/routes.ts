import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMusicsComponent } from './admin/musics/admin-musics.component';
import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { AllPlaylistsComponent } from './account/playlists/all-playlists/all-playlists.component';
import { AddPlaylistComponent } from './account/playlists/add-playlist/add-playlist.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MusicsByGenreComponent } from './account/additional/musics-by-genre/musics-by-genre.component';
import { MusicDetailedComponent } from './account/additional/music-detailed/music-detailed.component';
import { MusicsComponent } from './account/musics/musics.component';
import { AllMusicsComponent } from './account/musics/all-musics/all-musics.component';
import { AddMusicComponent } from './account/musics/add-music/add-music.component';
import { ProfileComponent } from './account/profile/profile.component';
import { ViewProfileComponent } from './account/profile/view-profile/view-profile.component';
import { EditProfileComponent } from './account/profile/edit-profile/edit-profile.component';
// Guards
import { LoggedInGuard } from './auth/guards/loggedIn.guard';
import { IsAdminGuard } from './auth/guards/isAdmin.guard';

const routing: Routes = [
    { path: 'account', component: AccountComponent, canActivate: [LoggedInGuard], children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component: PlaylistsComponent, children: [
            { path: '', component: AllPlaylistsComponent },
            { path: 'add', component: AddPlaylistComponent }
        ] },
    	{ path: 'genres/:slug', component: MusicsByGenreComponent },
    	{ path: 'musics', component: MusicsComponent, children: [
            { path: '', component: AllMusicsComponent },
            { path: 'add', component: AddMusicComponent },
            { path: ':id', component: MusicDetailedComponent }
        ] },
        { path: 'profile', component: ProfileComponent, children: [
            { path: '', component: ViewProfileComponent },
            { path: 'edit', component: EditProfileComponent }
        ] }
    ]},
    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard, IsAdminGuard], children: [
    	{ path: 'musics', component: AdminMusicsComponent },
    ]},
]
    

export const routes = routing;
