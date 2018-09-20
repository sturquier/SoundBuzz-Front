import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicDetailedService } from '../../../../services/music-detailed.service';
import { DownloadMusicService } from '../../../../services/download-music.service';
import { MyPlaylistsService } from '../../../../services/my-playlists.service'
import { PlaylistModel } from '../../../../models/playlist';
import { MusicPlayerService } from 'ngx-soundmanager2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css']
})

export class MusicDetailedComponent implements OnInit {
	addPlaylistForm: FormGroup;
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
		private formBuilder: FormBuilder, 
		private musicDetailedService: MusicDetailedService,
		private downloadMusicService: DownloadMusicService,
		private myPlaylistsService: MyPlaylistsService,
		private ngxPlayerService: MusicPlayerService,
		private router: Router,
	) { 

	}

	// convertMinutes(){
	// 	return Math.floor(this.music.duration /60);
	// }
	
	ngOnInit() {
    	this.route.params.subscribe(params => {
			this.musicId = params.id
		})
		this.choiceplaylist = false;
		this.addPlaylistForm = this.formBuilder.group({
			music: [this.musicId, Validators.required],
			playlist: ['', Validators.required],
		})
		this.loadSingleMusic()
		this.loadPlaylists()
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

	loadPlaylists(){
		this.myPlaylistsService.loadUserPlaylists()
 		this.myPlaylistsService
 			.subject
 			.asObservable()
			.subscribe(myPlaylists => this.myPlaylists = myPlaylists)
		console.log(this.myPlaylists)
	}

	activateChoicePlaylist(){
		if (this.myPlaylists == undefined || this.myPlaylists.length == 0) {
			this.router.navigate(['/account/playlists/add'])
		} else {
			this.choiceplaylist = !this.choiceplaylist
		}
	}

	addMusicToPlaylist(){
		console.log(this.addPlaylistForm.value);
	}

	play(music) {
		console.log(music)
		this.ngxPlayerService.addTrack(music);
		this.ngxPlayerService.play();
	}

}
