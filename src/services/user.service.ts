import { Injectable } from '@angular/core'

@Injectable()
export class UserService
{
	user = null

	constructor() {
		this.setCurrentUserFromStorage()
	}

	setCurrentUser(user) {
		this.user = user;
	}

	getCurrentUser() {
		return this.user
	}

	setCurrentUserFromStorage()
	{
		if (
			this.user === null && 
			Object.keys(localStorage.getItem('currentUser')).length !== 0
		) {
			this.setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
		}
	}
}