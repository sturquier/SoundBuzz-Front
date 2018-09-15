import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { UserService } from '../../../services/user.service'

@Injectable()
export class LoggedInGuard implements CanActivate
{

	constructor(private userService: UserService, private router: Router)
	{
		this.userService = userService
	}

	/**
	 *	Guard which checks if a user is connected
	 * 	If user not connected => redirect to /login
	 */
	canActivate() {
		if (this.userService.getCurrentUser() !== null) {
			return true;
		}
		
		this.router.navigate(['/login'])
		return false;
	}
}