import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'
import { HomeService } from './home.service'

@NgModule({
   imports: [
       BrowserModule,
       HttpModule,
       RouterModule
   ],
   entryComponents: [ HomeComponent ],
   declarations: [ HomeComponent ],
   providers: [ HomeService ],
   exports: [ HomeComponent ]
})

export class HomeModule {}