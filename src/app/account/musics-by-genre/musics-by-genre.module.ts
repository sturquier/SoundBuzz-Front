import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'
import { BrowserModule } from '@angular/platform-browser'
import { MusicsByGenreComponent } from './musics-by-genre.component'
import { MusicsByGenreService } from './musics-by-genre.service'

@NgModule({
   imports: [
       BrowserModule,
       HttpModule
   ],
   entryComponents: [ MusicsByGenreComponent ],
   declarations: [ MusicsByGenreComponent ],
   providers: [ MusicsByGenreService ],
   exports: [ MusicsByGenreComponent ]
})

export class MusicsByGenreModule {}