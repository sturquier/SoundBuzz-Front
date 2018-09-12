import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { LoginService } from './login.service'

@Component({
  	selector: 'app-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css'],
  	providers: [LoginService]
})
export class LoginComponent implements OnInit {

	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private loginService: LoginService
	) { }

  	ngOnInit() {
  		this.loginForm = this.formBuilder.group({
  			email: ['', Validators.required],
  			password: ['', Validators.required]
  		})


  	}

  	onLogin() {
		this.loginService.loginUser(
			this.loginForm.controls.email.value,
			this.loginForm.controls.password.value
		)

		this.loginService
			.subject
			.asObservable()
			.subscribe((currentUser) => {
				localStorage.setItem('currentUser', JSON.stringify(currentUser))
				this.router.navigate(['/account'])
			})
  	}

}
