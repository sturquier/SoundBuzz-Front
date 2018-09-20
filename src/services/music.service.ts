import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'

@Injectable()
export class MusicService
{
	subject: Subject<Array<MusicModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Fetch musics of the user
	 */
	loadUserMusics(userId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/users/${userId}/musics`)
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