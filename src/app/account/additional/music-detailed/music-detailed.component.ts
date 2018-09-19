import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDetailedService } from '../../../../services/music-detailed.service';
import { MusicModel } from '../../../../models/music';
import { DownloadMusicService } from '../../../../services/download-music.service';

@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css']
})

export class MusicDetailedComponent implements OnInit {
  	music: MusicModel[]
	musicId: number
	headphones: string = "headphones";
	download: string = "download";
	heart: string = "heart";
	plusSquare: string = "plus-square";

	constructor(
    	private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService,
		private downloadMusicService: DownloadMusicService
	) { }

	// convertMinutes(){
	// 	return Math.floor(this.music.duration /60);
	// }
	
	ngOnInit() {
    	this.route.params.subscribe(params => {
			this.musicId = params.id
		})
		
		this.loadSingleMusic()
	}

	loadSingleMusic() {
		this.musicDetailedService.loadSingleMusic(this.musicId)
		this.musicDetailedService
			.subject
			.asObservable()
			.subscribe((music) => {
				this.music = music
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

}
