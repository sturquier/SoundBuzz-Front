import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../../../services/login.service'
import { UserService } from '../../../../services/user.service'

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css'],
	providers: [LoginService]
})
export class AsideComponent implements OnInit {

	currentUser: null

	constructor(
		private router: Router,
		private loginService: LoginService,
		private userService: UserService
	) { }

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
	}

	onLogout() {
		this.loginService.logoutUser()
		this.loginService
			.subject
			.asObservable()
			.subscribe(() => {
				this.userService.setCurrentUser(null)
				this.router.navigate(['/'])
			})
	}
}
