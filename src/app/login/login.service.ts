import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from '../../services/api.service'
import { AuthTokenModel } from '../../models/authToken'

@Injectable()
export class LoginService
{
	subject: Subject<Array<AuthTokenModel>> = new Subject()

	constructor(private apiService: ApiService) {

	}

	/**
	 *	Login a single user with email:password
	 */
	loginUser(email: string, password: string) {
		return new Promise((resolve, reject) => {
			this
				.apiService
				.post(`/auth-tokens`, {
					email: email,
					password: password
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
	 *	Logout a single user. Remove his token from database
	 */
	logoutUser() {
		const currentUser = JSON.parse(localStorage.getItem('currentUser'))

		return new Promise((resolve, reject) => {
			this
				.apiService
				.delete(`/auth-tokens/${currentUser.id}`)
				.subscribe(response => {
					this.subject.next(response.json())
					resolve(response.json())
				}),
				error => {
					this.subject.error(error.json())
					reject(error())
				}
		})
	}
}