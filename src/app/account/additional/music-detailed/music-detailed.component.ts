import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MusicDetailedService } from '../../../../services/music-detailed.service';
import { DownloadMusicService } from '../../../../services/download-music.service';
import { MyPlaylistsService } from '../../../../services/my-playlists.service'
import { LikeMusicService } from '../../../../services/like-music.service';
import { UserService } from '../../../../services/user.service';
import { PlaylistModel } from '../../../../models/playlist';
import { MusicPlayerService } from 'ngx-soundmanager2';


@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css'],
  providers: [UserService, LikeMusicService]
})

export class MusicDetailedComponent implements OnInit {
	user: any
	addPlaylistForm: FormGroup
  	music: any
  	myPlaylists: PlaylistModel[];
  	playlist: PlaylistModel;
  	choiceplaylist: boolean;
	musicId: number
	headphones: string = "headphones";
	download: string = "download";
	heart: string = "heart";
	plusSquare: string = "plus-square";
	is_liked: boolean = false;

	constructor(
		private route: ActivatedRoute,
		private formBuilder: FormBuilder, 
		private musicDetailedService: MusicDetailedService,
		private downloadMusicService: DownloadMusicService,
		private myPlaylistsService: MyPlaylistsService,
		private likeMusicService: LikeMusicService,
		private ngxPlayerService: MusicPlayerService,
		private userService: UserService,
		private router: Router,
	) { 
		this.user = this.userService.getCurrentUser()
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
		this.likeMusicService.likeMusic(this.user.user.id, this.musicId)
		this.musicDetailedService
			.subject
			.asObservable()
			.subscribe(like => {
				console.log("j'ai liké ou j'ai plus liké")
				console.log(like)
				//boolean to set when you know the like
				this.is_liked = !this.is_liked
			})
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
