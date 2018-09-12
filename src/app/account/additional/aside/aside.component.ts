import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../../login/login.service'

@Component({
  	selector: 'app-aside',
  	templateUrl: './aside.component.html',
  	styleUrls: ['./aside.component.css'],
  	providers: [LoginService]
})
export class AsideComponent implements OnInit {

  	constructor(
  		private router: Router,
  		private loginService: LoginService
  	) { }

  	ngOnInit() {
  	}

  	onLogout() {
  		this.loginService.logoutUser()
  		this.loginService
  			.subject
  			.asObservable()
  			.subscribe(() => {
  				localStorage.removeItem('currentUser')
  				this.router.navigate(['/'])
  			})
  	}

}
