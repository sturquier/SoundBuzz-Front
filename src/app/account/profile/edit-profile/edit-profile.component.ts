import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker'
import { UserService } from '../../../../services/user.service'
import { MyProfileService } from '../../../../services/my-profile.service'

@Component({
	selector: 'edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit
{
	currentUser
	editProfileForm: FormGroup
	error = ""
	submitted = false
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}

	constructor(
		private userService: UserService,
		private myProfileService: MyProfileService,
		private formBuilder: FormBuilder,
		private router: Router
	) {}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()

		this.editProfileForm = this.formBuilder.group({
			firstname: ['', Validators.required],
  			lastname: ['', Validators.required],
  			username: ['', Validators.required],
  			email: ['', Validators.required],
  			// birthday: ['', Validators.required],
		})
	}

	onEditProfile() {
		this.submitted = true;

		this.myProfileService.editProfile(
			this.currentUser.user.id,
			this.editProfileForm.controls.firstname.value,
			this.editProfileForm.controls.lastname.value,
			this.editProfileForm.controls.username.value,
			this.editProfileForm.controls.email.value,
			// this.editProfileForm.controls.birthday.value.formatted,
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