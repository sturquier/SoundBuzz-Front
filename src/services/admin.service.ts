import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'
import { UserModel } from '../models/user'
import { GenreModel } from '../models/genre'

@Injectable()
export class AdminService
{
	musicSubject: Subject<Array<MusicModel>> = new Subject()
	userSubject: Subject<Array<UserModel>> = new Subject()
	genreSubject: Subject<Array<GenreModel>> = new Subject()

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

	/**
	 *	Fetch a single user
	 */
	loadSingleUser(userId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/users/${userId}`)
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

	/**
	 *	Edit a single user
	 */
	editSingleUser(userId: number, firstname: string, lastname: string, username: string, email: string, is_active: boolean, role: string) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.patch(`/admin/users/${userId}`, {
					firstname: firstname,
					lastname: lastname,
					username: username,
					email: email,
					is_active: is_active,
					role: role
				})
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

	/**
	 *	Delete a single user
	 */
	deleteUser(userId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.delete(`/users/${userId}`)
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

	/**
	 *	Delete a single genre
	 */
	deleteGenre(genreId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.delete(`/genres/${genreId}`)
				.subscribe(response => {
					this.genreSubject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.genreSubject.error(error.json())
					reject(error)
				}
		})
	}

	/**
	 *	Create a single genre
	 */
	createGenre(name: string, photo: File) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.postWithFormData('/genres', {
					name: name,
					photo: photo
				})
				.subscribe(response => {
					this.genreSubject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.genreSubject.error(error.json())
					reject(error)
				}
		})
	}
}