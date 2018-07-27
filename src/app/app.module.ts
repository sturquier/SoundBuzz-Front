import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { TooltipModule } from 'ngx-bootstrap/tooltip';

// Routing 
import { routes } from './routes';
// Components
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { PlaylistsComponent } from './account/playlists/playlists.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './account/additional/header/header.component';
import { PlayerComponent } from './account/additional/player/player.component';
import { AsideComponent } from './account/additional/aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
// Modules
import { HomeModule } from './account/home/home.module'
// Services
import { ApiService } from '../services/api.service'

@NgModule({
  declarations: [
    AppComponent,
    PlaylistsComponent,
    LandingPageComponent,
    HeaderComponent,
    PlayerComponent,
    AsideComponent,
    NavComponent,
    RegisterComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    RouterModule.forRoot(routes),
    HomeModule
  ],
  providers: [
    ApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
