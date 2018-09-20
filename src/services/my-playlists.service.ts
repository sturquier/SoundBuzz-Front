import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { PlaylistModel } from '../models/playlist'
import { UserService } from './user.service'

@Injectable()
export class MyPlaylistsService
{
	subject: Subject<Array<PlaylistModel>> = new Subject()

	constructor(private apiService: ApiService, private userService: UserService) {

	}

	/**
	 * Fetch all playlists of connected user
	 */
	loadUserPlaylists() 
	{
		const currentUser = this.userService.getCurrentUser()

		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/users/${currentUser.user.id}/playlists`)
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

	/**
	 * Fetch one playlist detail
	 */
	loadOnePlaylist(id) 
	{
		const currentUser = this.userService.getCurrentUser()

		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/playlists/${id}/`)
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