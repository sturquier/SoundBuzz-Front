import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { UserModel } from '../models/user'

@Injectable()
export class MyProfileService
{
	subject: Subject<Array<UserModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 * Edit user profile
	 */
	editProfile(
		id: number, firstname: string, lastname: string, 
		username: string, email: string, birthday: string
	) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.patch(`/users/${id}`, {
					firstname: firstname,
					lastname: lastname,
					username: username,
					email: email,
					birthday: birthday
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

	/**
	 *	Change user password
	 */
	changePassword(
		id: number, newPassword: string
	) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.patch(`/users/${id}`, {
					password: newPassword
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