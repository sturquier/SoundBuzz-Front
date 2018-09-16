import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../../services/user.service'

@Component({
	selector: 'edit-profile',
	templateUrl: './edit-profile.component.html',
	styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit
{
	currentUser: null

	constructor(
		private userService: UserService
	) {}

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
	}
}