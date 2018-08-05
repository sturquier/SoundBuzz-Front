import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from '../../../services/api.service'
import { MusicModel } from '../../../models/music'

@Injectable()
export class MusicDetailedService
{
	subject: Subject<Array<MusicModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Fetch a single music by specific music id
	 */
	loadSingleMusic(musicId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/musics/${musicId}`)
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