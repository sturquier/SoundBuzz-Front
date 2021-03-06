import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'
import { environment } from '../environments/environment.prod';

@Injectable()
export class AddMusicService
{
	subject: Subject<Array<MusicModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 * 	Create a single music 
	 */
	createMusic(payload) {
		
		return new Promise((resolve, reject) => {
			this
				.apiService
				.postWithFormData('/musics', payload)
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

	/**
	 * 	Create a single music 
	 */
	getArtists() {
		
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get('/artists')
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