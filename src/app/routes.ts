import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component';
import { AdminMusicsComponent } from './admin/musics/admin-musics.component';
import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MusicsByGenreComponent } from './account/additional/musics-by-genre/musics-by-genre.component';
import { MusicDetailedComponent } from './account/additional/music-detailed/music-detailed.component';
import { MusicsComponent } from './account/musics/musics.component';

const routing: Routes = [
    { path: 'account', component: AccountComponent, children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component: PlaylistsComponent },
    	{ path: 'genres/:slug', component: MusicsByGenreComponent },
    	{ path: 'musics', component: MusicsComponent, children: [
            { path: ':id', component: MusicDetailedComponent }
        ] }
    ]},

    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'admin', component: AdminComponent, children: [
    	{ path: 'musics', component: AdminMusicsComponent },
    	
    ]},
    { path: 'login', component: LoginComponent }]
    

export const routes = routing;
