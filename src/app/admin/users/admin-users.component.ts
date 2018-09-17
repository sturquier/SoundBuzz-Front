import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../models/user'
import { AdminService } from '../../../services/admin.service'

@Component({
  	selector: 'admin-users',
  	templateUrl: './admin-users.component.html',
  	styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

	users: UserModel[]
	p: number = 1

  	constructor(
  		private adminService: AdminService
  	) { }

  	ngOnInit() {
  		this.adminService.loadAllUsers()
  		this.adminService
  			.userSubject
  			.asObservable()
  			.subscribe((users) => {
  				this.users = users
  			})
  	}

}
