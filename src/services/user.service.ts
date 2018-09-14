import { Injectable } from '@angular/core'

@Injectable()
export class UserService
{
	user = null

	constructor() {

	}

	setCurrentUser(user) {
		this.user = user;
	}

	getCurrentUser() {
		return this.user
	}
}