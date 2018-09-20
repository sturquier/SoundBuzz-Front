import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker'
import { AdminService } from '../../../../services/admin.service'
import { UserModel } from '../../../../models/user'

@Component({
	selector: 'admin-edit-user',
	templateUrl: './admin-edit-user.component.html',
	styleUrls: ['./admin-edit-user.component.html']
})
export class AdminEditUserComponent implements OnInit {

	editedUserId: number
	editedUser: UserModel[]
	adminEditUserForm: FormGroup
	error = ""
	submitted = false
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}

	constructor(
		private router: Router,
		private formBuilder: FormBuilder,
		private adminService: AdminService,
		private route: ActivatedRoute
	) {
		this.route.params.subscribe(params => {
			this.editedUserId = params.id
		})

		this.adminService.loadSingleUser(this.editedUserId)
		this.adminService
			.userSubject
			.asObservable()
			.subscribe((editedUser) => {
				this.editedUser = editedUser
			})
	}

	ngOnInit() {
		this.adminEditUserForm = this.formBuilder.group({
			firstname: ['', Validators.required],
  			lastname: ['', Validators.required],
  			username: ['', Validators.required],
  			email: ['', Validators.required],
  			// birthday: ['', Validators.required],
  			is_active: ['', Validators.required],
  			role: ['', Validators.required]
		})
	}

	checkIsModerator() {
		if (this.editedUser.role === 'ROLE_MODERATOR') {
			return true
		}

		return false
	}

	onAdminEditUser() {
		this.submitted = true
		let editedUserRole

		if (this.adminEditUserForm.controls.role.value === false) {
			editedUserRole = 'ROLE_USER'
		} else {
			editedUserRole = 'ROLE_MODERATOR'
		}

		this.adminService.editSingleUser(
			this.editedUserId,
			this.adminEditUserForm.controls.firstname.value,
			this.adminEditUserForm.controls.lastname.value,
			this.adminEditUserForm.controls.username.value,
			this.adminEditUserForm.controls.email.value,
			this.adminEditUserForm.controls.is_active.value,
			editedUserRole
		)

		this.adminService
			.userSubject
			.asObservable()
			.subscribe(
				(result) => {
					this.router.navigate(['/admin/users'])
				},
				(error) => {
					this.error = error
					console.log(error)
				}
			)
	}
}