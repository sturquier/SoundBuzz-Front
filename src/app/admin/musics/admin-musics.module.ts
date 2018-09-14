import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { AdminMusicsComponent } from './admin-musics.component'
import { AdminMusicsService } from './admin-musics.service'
import { CommonModule } from '@angular/common';  
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
   imports: [
       BrowserModule,
       HttpModule,
       RouterModule,
       CommonModule,
       NgxPaginationModule,

   ],
   entryComponents: [ AdminMusicsComponent ],
   declarations: [ AdminMusicsComponent ],
   providers: [ AdminMusicsService ],
   exports: [ AdminMusicsComponent ]
})

export class AdminMusicsModule {}