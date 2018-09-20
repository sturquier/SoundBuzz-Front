import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'

@Injectable()
export class MusicDetailedService
{
	subject: any = new Subject()

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

	/**
	 *	Add a single music to a single playlist
	 */
	addMusicToPlaylist(playlistId: number, musicId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post(`/playlists/${playlistId}/add-music`, {
					music_id: musicId
				})
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
	 *	Delete a single music
	 */
	deleteMusic(musicId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.delete(`/musics/${musicId}`)
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