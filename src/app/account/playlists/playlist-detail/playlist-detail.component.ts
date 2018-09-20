import { Component, OnInit } from '@angular/core';
import { MyPlaylistsService } from '../../../../services/my-playlists.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent implements OnInit {
  playlistId: number
  playlist: any

  constructor(
    private route: ActivatedRoute,
    private myPlaylistsService: MyPlaylistsService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
			this.playlistId = params.id
    })
    
    this.myPlaylistsService.loadOnePlaylist(this.playlistId)
    this.myPlaylistsService
      .subject
			.asObservable()
			.subscribe(playlist => this.playlist = playlist)
  }

}
