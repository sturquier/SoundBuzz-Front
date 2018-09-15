import { Component, OnInit } from '@angular/core';
import { MyPlaylistsService } from '../../../../services/my-playlists.service'
import { PlaylistModel } from '../../../../models/playlist'

@Component({
  	selector: 'app-all-playlists',
  	templateUrl: './all-playlists.component.html',
  	styleUrls: ['./all-playlists.component.css']
})
export class AllPlaylistsComponent implements OnInit {
	myPlaylists: PlaylistModel[]

  	constructor(
  		private myPlaylistsService: MyPlaylistsService
  	) { }

 	ngOnInit() {
 		this.myPlaylistsService.loadUserPlaylists()
 		this.myPlaylistsService
 			.subject
 			.asObservable()
 			.subscribe(myPlaylists => this.myPlaylists = myPlaylists)	
  	}

}
