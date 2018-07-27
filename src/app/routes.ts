import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';

const routing: Routes = [
    { path: 'account', component: HomeComponent, children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component:PlaylistsComponent }
    ]},

    { path: '', component: LandingPageComponent}
    { path: 'register', component: RegisterComponent}
]


export const routes = routing;
