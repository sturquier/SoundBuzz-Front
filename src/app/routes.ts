import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MusicsByGenreComponent } from './account/musics-by-genre/musics-by-genre.component';
import { MusicDetailedComponent } from './account/music-detailed/music-detailed.component';

const routing: Routes = [
    { path: 'account', component: AccountComponent, children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component: PlaylistsComponent },
    	{ path: 'genres/:slug', component: MusicsByGenreComponent },
    	{ path: 'musics/:id', component: MusicDetailedComponent }
    ]},

    { path: '', component: LandingPageComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
]


export const routes = routing;
