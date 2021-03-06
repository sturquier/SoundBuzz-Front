import { Routes, RouterModule } from '@angular/router';

// Components
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/home/admin-home.component';
import { AdminUsersComponent } from './admin/users/admin-users.component';
import { AdminViewUsersComponent } from './admin/users/view/admin-view-users.component';
import { AdminEditUserComponent } from './admin/users/edit/admin-edit-user.component';
import { AdminGenresComponent } from './admin/genres/admin-genres.component';
import { AdminViewGenresComponent } from './admin/genres/view/admin-view-genres.component'
import { AdminAddGenreComponent } from './admin/genres/add/admin-add-genre.component'
import { AdminMusicsComponent } from './admin/musics/admin-musics.component';

import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { AllPlaylistsComponent } from './account/playlists/all-playlists/all-playlists.component';
import { AddPlaylistComponent } from './account/playlists/add-playlist/add-playlist.component';
import { PlaylistDetailComponent } from './account/playlists/playlist-detail/playlist-detail.component';
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
import { ChangePasswordComponent } from './account/profile/change-password/change-password.component';
// Guards
import { LoggedInGuard } from './auth/guards/loggedIn.guard';
import { IsAdminGuard } from './auth/guards/isAdmin.guard';

const routing: Routes = [
    { path: 'account', component: AccountComponent, canActivate: [LoggedInGuard], children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component: PlaylistsComponent, children: [
            { path: '', component: AllPlaylistsComponent },
            { path: 'add', component: AddPlaylistComponent },
            { path: ':id', component: PlaylistDetailComponent }

        ] },
    	{ path: 'genres/:slug', component: MusicsByGenreComponent },
    	{ path: 'musics', component: MusicsComponent, children: [
            { path: '', component: AllMusicsComponent },
            { path: 'add', component: AddMusicComponent },
            { path: ':id', component: MusicDetailedComponent }
        ] },
        { path: 'profile', component: ProfileComponent, children: [
            { path: '', component: ViewProfileComponent },
            { path: 'edit', component: EditProfileComponent },
            { path: 'change-password', component: ChangePasswordComponent }
        ] }
    ]},
    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent, canActivate: [LoggedInGuard, IsAdminGuard], children: [
        { path: '', component: AdminHomeComponent },
    	{ path: 'users', component: AdminUsersComponent, children: [
            { path: '', component: AdminViewUsersComponent },
            { path: 'edit/:id', component: AdminEditUserComponent }
        ] },
        { path: 'genres', component: AdminGenresComponent, children: [
            { path: '', component: AdminViewGenresComponent },
            { path: 'add', component: AdminAddGenreComponent },
        ]},
        { path: 'musics', component: AdminMusicsComponent }
    ]},
]
    

export const routes = routing;
