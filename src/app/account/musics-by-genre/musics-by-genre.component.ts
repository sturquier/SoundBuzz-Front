import { Component, OnInit } from '@angular/core'
import { MusicsByGenreService } from './musics-by-genre.service'
import { GenreModel } from '../../../models/genre'
import { MusicModel } from '../../../models/music'

@Component({
  selector: 'musics-by-genre',
  templateUrl: './musics-by-genre.component.html',
  styleUrls: ['./musics-by-genre.component.css']
})
export class MusicsByGenreComponent implements OnInit {
	genre: GenreModel[]
	musics: MusicModel[]
	constructor(private musicsByGenreService: MusicsByGenreService) { }

	ngOnInit() {
		this.musicsByGenreService.loadAllMusicsByGenre('electronique')
		this.musicsByGenreService
			.subject
			.asObservable()
			.subscribe((genre) => {
				this.genre = genre,
				this.musics = genre.musics
			})
  }

}
