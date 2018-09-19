import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from '../../../../services/user.service'
import { MyProfileService } from '../../../../services/my-profile.service'

@Component({
	selector: 'change-password',
	templateUrl: './change-password.component.html',
	styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit
{
	currentUser
	changePasswordForm: FormGroup
	error = ""
	submitted = false

	constructor(
		private userService: UserService,
		private myProfileService: MyProfileService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()

		this.changePasswordForm = this.formBuilder.group({
			oldPassword: ['', Validators.required],
			newPassword: ['', Validators.required],
			confirmNewPassword: ['', Validators.required]
		})
	}

	onChangePassword() {
		this.submitted = true

		this.myProfileService.changePassword(
			this.currentUser.user.id,
			this.changePasswordForm.controls.newPassword.value
		)

		this.myProfileService
			.subject
			.asObservable()
			.subscribe(
				(result) => {
					this.router.navigate(['/account/profile'])
				},
				(error) => {
					this.error = error
					console.log(this.error)
				}
			)
	}
}