import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'

@Injectable()
export class AddMusicService
{
	subject: Subject<Array<MusicModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 * 	Create a single music 
	 */
	createMusic(
		title: string, description: string, file: string,
		is_explicit: boolean, downloadable: boolean, 
		created_at: string, is_active: boolean
	) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post('/musics', {
					title: title,
					description: description,
					file: file,
					is_explicit: is_explicit,
					downloadable: downloadable,
					created_at: created_at,
					is_active: is_active
				})
				.subscribe(
					(response) => {
						this.subject.next(response.json())
						resolve(response.json())
					},
					(error) => {
						this.subject.error(error.json())
						reject(error)
					}
				)
		})
	}
}