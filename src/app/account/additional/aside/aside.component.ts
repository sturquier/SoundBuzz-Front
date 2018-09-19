import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../../../services/login.service'
import { UserService } from '../../../../services/user.service'
import { MyPlaylistsService } from '../../../../services/my-playlists.service'
import { PlaylistModel } from '../../../../models/playlist'

@Component({
	selector: 'app-aside',
	templateUrl: './aside.component.html',
	styleUrls: ['./aside.component.css'],
	providers: [LoginService]
})
export class AsideComponent implements OnInit {

	currentUser: null
	myPlaylists: PlaylistModel[]

	constructor(
		private router: Router,
		private loginService: LoginService,
		private userService: UserService,
		private myPlaylistsService: MyPlaylistsService
	) { }

	ngOnInit() {
		this.currentUser = this.userService.getCurrentUser()
		this.loadPlaylists();
	}

	onLogout() {
		this.loginService.logoutUser()
		this.loginService
			.subject
			.asObservable()
			.subscribe(() => {
				localStorage.removeItem('currentUser')
				this.userService.setCurrentUser(null)
				this.router.navigate(['/'])
			})
	}

	loadPlaylists(){
		this.myPlaylistsService.loadUserPlaylists()
 		this.myPlaylistsService
 			.subject
 			.asObservable()
 			.subscribe(myPlaylists => this.myPlaylists = myPlaylists)	
	}
}
