import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyPlaylistsService } from '../../../../services/my-playlists.service';
import { MusicPlayerService } from 'ngx-soundmanager2';

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
    private ngxPlayerService: MusicPlayerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
			this.playlistId = params.id
    })
    
    this.myPlaylistsService.loadOnePlaylist(this.playlistId)
    this.myPlaylistsService
      .subject
			.asObservable()
			.subscribe(playlist => {
        this.playlist = playlist
        this.playlist.musics.forEach(m => {
          m['url'] = `http://localhost:8080/uploads/musics/${m.file}`
        });
      })
  }

  play() {
    console.log(this.playlist)
    this.ngxPlayerService.addToPlaylist(this.playlist.musics)
    this.ngxPlayerService.play()
  }

}
