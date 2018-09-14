import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { GenreModel } from '../models/genre'

@Injectable()
export class MusicsByGenreService
{
	subject: Subject<Array<GenreModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Fetch all musics by specific genre slug
	 */
	loadAllMusicsByGenre(genreSlug: string) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/genres/${genreSlug}`)
				.subscribe(response => {
					this.subject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.subject.error(error.json())
					reject(error)
				}
		})
	}
}