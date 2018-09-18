import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { PlaylistModel } from '../models/playlist'

@Injectable()
export class AddPlaylistService
{
	subject: Subject<Array<PlaylistModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Create a single playlist
	 */
	createPlaylist(
		name: string, description: string, is_private: boolean, userId: number
	) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post('/playlists', {
					name: name,
					description: description,
					is_private: is_private,
					user: userId
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