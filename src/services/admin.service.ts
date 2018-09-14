import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'

@Injectable()
export class AdminService
{
	subject: Subject<Array<MusicModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Fetch all musics
	 */
	loadAllMusics() {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/musics`)
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