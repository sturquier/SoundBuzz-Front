import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { UserModel } from '../models/user'

@Injectable()
export class RegisterService
{
	subject: Subject<Array<UserModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 * Register a single user 
	 */
	registerUser(
		firstname: string, lastname: string, username: string,
		password: string, email: string, birthday: string
	) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post(`/users`, {
					firstname: firstname,
					lastname: lastname,
					username: username,
					password: password,
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

}