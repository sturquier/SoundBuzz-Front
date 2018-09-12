import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../../../models/music'
import { AdminMusicsService } from './admin-musics.service'


@Component({
  selector: 'app-admin-musics',
  templateUrl: './admin-musics.component.html',
  styleUrls: ['./admin-musics.component.css']
})
export class AdminMusicsComponent implements OnInit {
	music: MusicModel[]
	
  constructor(
  	private adminMusicsService: AdminMusicsService
  	) {  }

  ngOnInit() {
  	this.adminMusicsService.loadAllMusics();
  	this.adminMusicsService
			.subject
			.asObservable()
			.subscribe((music) => {
				this.music = music
			})
  }

}
