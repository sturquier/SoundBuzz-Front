import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { CommentModel } from '../models/comment'

@Injectable()
export class AddCommentService
{
	subject: Subject<Array<CommentModel>> = new Subject()

	constructor(private apiService: ApiService)
	{

	}

	/**
	 * 	A single user add a single comment to a single music
	 */
	addCommentToMusic(musicId: number, userId: number, content: string) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post(`/musics/${musicId}/add-comment`, {
					user: userId,
					content: content
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
}