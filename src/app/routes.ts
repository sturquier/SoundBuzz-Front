import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { MusicsByGenreComponent } from './account/musics-by-genre/musics-by-genre.component';

const routing: Routes = [
    { path: 'account', component: AccountComponent, children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component: PlaylistsComponent },
    	{ path: 'musics/:slug', component: MusicsByGenreComponent }
    ]},

    { path: '', component: LandingPageComponent},
    { path: 'register', component: RegisterComponent}
]


export const routes = routing;
