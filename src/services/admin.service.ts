import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'
import { UserModel } from '../models/user'

@Injectable()
export class AdminService
{
	musicSubject: Subject<Array<MusicModel>> = new Subject()
	userSubject: Subject<Array<UserModel>> = new Subject()

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
					this.musicSubject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.musicSubject.error(error.json())
					reject(error)
				}
		})
	}

	/**
	 * 	Fetch all users
	 */
	loadAllUsers() {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get('/users')
				.subscribe(response => {
					this.userSubject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.userSubject.error(error.json())
					reject(error)
				}
		})
	}
}