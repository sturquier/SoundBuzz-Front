import { Component, OnInit } from '@angular/core'
import { UserService } from '../../../../services/user.service'

@Component({
	selector: 'view-profile',
	templateUrl: './view-profile.component.html',
	styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit
{
	currentUser: null

	constructor(
		private userService: UserService
	) { }

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
	}
}