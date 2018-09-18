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
	trash: string = "trash"

	constructor(
		private adminService: AdminService
	) { }

	ngOnInit() {
		this.loadAllUsers()
	}

	loadAllUsers() {
		this.adminService.loadAllUsers()
		this.adminService
			.userSubject
			.asObservable()
			.subscribe((users) => {
				this.users = users
		})
	}

	onDeleteUser(userId) {
		if (confirm("Etes vous sur de supprimer cet utilisateur ? Cela supprimera aussi ses musiques, playlists, likes et commentaires")) {
			this.adminService.deleteUser(userId)
			this.adminService
				.userSubject
				.asObservable()
				.subscribe(
				(result) => { this.loadAllUsers() },
				(error) => console.log(error))
			}
		}

}
