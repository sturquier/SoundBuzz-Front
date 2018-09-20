import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { UserService } from '../../../../services/user.service'
import { AdminService } from '../../../../services/admin.service'
import { LoginService } from '../../../../services/login.service'

@Component({
	selector: 'view-profile',
	templateUrl: './view-profile.component.html',
	styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit
{
	currentUser

	constructor(
		private userService: UserService,
		private adminService: AdminService,
		private loginService: LoginService,
		private router: Router
	) { }

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
	}

	onDeleteAccount() {
		if (confirm("Etes vous sur de supprimer votre compte ? Cette action est irréversible")) {
			this.loginService.logoutUser()
			this.loginService
				.subject
				.asObservable()
				.subscribe(() => {
					localStorage.removeItem('currentUser')
					this.userService.setCurrentUser(null)
					this.adminService.deleteUser(this.currentUser.user.id)
					this.router.navigate(['/'])
				})
		}
	}
}