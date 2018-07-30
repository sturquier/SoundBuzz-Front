import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
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
	slug: string
	constructor(
		private route: ActivatedRoute,
		private musicsByGenreService: MusicsByGenreService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.slug = params.slug
		})

		this.musicsByGenreService.loadAllMusicsByGenre(this.slug)
		this.musicsByGenreService
			.subject
			.asObservable()
			.subscribe((genre) => {
				this.genre = genre,
				this.musics = genre.musics
			})
  }

}
