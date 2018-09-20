import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { GenreModel } from '../models/genre'

@Injectable()
export class HomeService
{
	subject: any = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Fetch all genres
	 */
	loadAllGenres() {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get('/genres')
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