import { Injectable } from '@angular/core'
import { CanActivate, Router } from '@angular/router'
import { UserService } from '../../../services/user.service'

@Injectable()
export class IsAdminGuard implements CanActivate
{

	constructor(private userService: UserService, private router: Router)
	{
		this.userService = userService
	}

	/**
	 *	Guard which checks is a user is admin
	 * 	If not => redirect to /account
	 */
	canActivate() {
		const currentUser = this.userService.getCurrentUser()

		if (currentUser.user.role === 'ROLE_ADMIN') {
			return true;
		}

		this.router.navigate(['/account'])
		return false;
	}
}