import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDetailedService } from '../../../../services/music-detailed.service';
import { MusicModel } from '../../../../models/music';
import { DownloadMusicService } from '../../../../services/download-music.service';
import { MyPlaylistsService } from '../../../../services/my-playlists.service'
import { PlaylistModel } from '../../../../models/playlist';
import { MusicPlayerService } from 'ngx-soundmanager2';

@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css']
})

export class MusicDetailedComponent implements OnInit {
  	music: any
  	myPlaylists: PlaylistModel[];
  	playlist: PlaylistModel;
  	choiceplaylist: boolean;
	musicId: number
	headphones: string = "headphones";
	download: string = "download";
	heart: string = "heart";
	plusSquare: string = "plus-square";

	constructor(
    	private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService,
		private downloadMusicService: DownloadMusicService,
		private myPlaylistsService: MyPlaylistsService,
		private ngxPlayerService: MusicPlayerService,
	) { }

	// convertMinutes(){
	// 	return Math.floor(this.music.duration /60);
	// }
	
	ngOnInit() {
    	this.route.params.subscribe(params => {
			this.musicId = params.id
		})
		this.choiceplaylist = false;
		this.loadSingleMusic()
		this.addInPlaylist()
	}

	loadSingleMusic() {
		this.musicDetailedService.loadSingleMusic(this.musicId)
		this.musicDetailedService
			.subject
			.asObservable()
			.subscribe((music) => {
				if (music) {
					this.music = music
					this.music['url'] = `http://localhost:8080/uploads/musics/${music.file}`
				}
				// this.music = music
				// if (music.file && typeof music.file !== 'string') {
				// 	this.music['url'] = `http://localhost:8080/uploads/musics/${music.file}`
				// }
				
			})
	}

	addToPlaylist() {
		console.log('coucou')
	}

	like() {
		console.log('coucou')
	}
	  
	onDownloadMusic() {
		this.downloadMusicService.downloadMusic(this.musicId)
		this.downloadMusicService
			.subject
			.asObservable()
			.subscribe(
				(result) => {
					this.loadSingleMusic()
				},
				(error) => { console.log(error) }
			)
	}

	addInPlaylist(){
		this.myPlaylistsService.loadUserPlaylists()
 		this.myPlaylistsService
 			.subject
 			.asObservable()
 			.subscribe(myPlaylists => this.myPlaylists = myPlaylists)
	}

	activateChoicePlaylist(){
		this.choiceplaylist = !this.choiceplaylist;
	}

	addMusicToPlaylist(value){
		console.log(value);
	}

	play(music) {
		console.log(music)
		this.ngxPlayerService.addTrack(music);
		this.ngxPlayerService.play();
	}

}
