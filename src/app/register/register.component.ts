import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { RegisterService } from '../../services/register.service'
import { LoginService } from '../../services/login.service' 
import { UserService } from '../../services/user.service'

@Component({
  	selector: 'app-register',
  	templateUrl: './register.component.html',
  	styleUrls: ['./register.component.css'],
  	providers: [RegisterService]
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup
	error = ""
	submitted = false
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}

  	constructor(
  		private formBuilder: FormBuilder,
  		private router: Router,
  		private registerService: RegisterService,
  		private loginService: LoginService,
      private userService: UserService
  	) { }

  	ngOnInit() {
  		this.registerForm = this.formBuilder.group({
  			firstname: ['', Validators.required],
  			lastname: ['', Validators.required],
  			username: ['', Validators.required],
  			password: ['', Validators.required],
  			confirmPassword: ['', Validators.required],
  			email: ['', Validators.required],
  			// birthday: ['', Validators.required],
  		})
  	}

  	onRegister() {
  		this.submitted = true;

  		this.registerService.registerUser(
  			this.registerForm.controls.firstname.value,
  			this.registerForm.controls.lastname.value,
  			this.registerForm.controls.username.value,
  			this.registerForm.controls.password.value,
  			this.registerForm.controls.email.value,
  			// this.registerForm.controls.birthday.value.formatted,
  		)

  		this.registerService
  			.subject
  			.asObservable()
  			.subscribe(
  				(result) => {
  					this.loginService.loginUser(
  						this.registerForm.controls.email.value,
  						this.registerForm.controls.password.value
  					).then(result => {
              localStorage.setItem('currentUser', JSON.stringify(result))
  					  this.userService.setCurrentUser(result)
  						this.router.navigate(['/account'])
  					})
  				},
  				(error) => {
  					this.error = error
  					console.log(this.error)
  				}
  			)
  	}
}
