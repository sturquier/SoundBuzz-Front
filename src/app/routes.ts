import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routing: Routes = [
    { path: 'account', component: HomeComponent, children: [
    	{ path: '', component: HomeComponent },
    	{ path: 'playlists', component:PlaylistsComponent }
    ]},

    { path: '', component: LandingPageComponent}
]


export const routes = routing;
