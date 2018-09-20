import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { LikeModel } from '../models/like'

@Injectable()
export class LikeMusicService
{
	subject: Subject<Array<LikeModel>> = new Subject()

	constructor(private apiService: ApiService)
	{

	}

	/**
	 *	A single user add or remove a single like to a single music
	 */
	likeMusic(userId: number, musicId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post(`/users/${userId}/like`, {
					music: musicId
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
	 *	Check if a single user has already liked a single music
	 *	If yes => return true
	 *	If no => return false
	 */
	checkIfUserHasLikedMusic(userId: number, musicId: number) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.get(`/users/${userId}/has_liked/${musicId}`)
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