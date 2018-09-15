import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../services/user.service'

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit
{
	currentUser: null

	constructor(
		private userService: UserService
	) { }

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
		console.log(this.currentUser)
	}
}