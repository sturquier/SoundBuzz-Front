import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { MusicDetailedComponent } from './music-detailed.component'
import { MusicDetailedService } from './music-detailed.service'

@NgModule({
   imports: [
       BrowserModule,
       HttpModule
   ],
   entryComponents: [ MusicDetailedComponent ],
   declarations: [ MusicDetailedComponent ],
   providers: [ MusicDetailedService ],
   exports: [ MusicDetailedComponent ]
})

export class MusicDetailedModule {}