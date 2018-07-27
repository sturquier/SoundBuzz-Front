import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

// App 
import {routes} from './routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './account/home/home.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './account/additional/header/header.component';
import { PlayerComponent } from './account/additional/player/player.component';
import { AsideComponent } from './account/additional/aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistsComponent,
    LandingPageComponent,
    HeaderComponent,
    PlayerComponent,
    AsideComponent,
    NavComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
