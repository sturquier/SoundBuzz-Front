import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../../../models/music'
import { AdminMusicsService } from './admin-musics.service'


@Component({
  selector: 'app-admin-musics',
  templateUrl: './admin-musics.component.html',
  styleUrls: ['./admin-musics.component.css'],
})

export class AdminMusicsComponent implements OnInit {
	musics: MusicModel[]
	p: number = 1;
	// musics=[];
	// listmusics= ['test','lol','lal'];
	test=0;
  constructor(
  	private adminMusicsService: AdminMusicsService
  	) {  }

  ngOnInit() {

  	this.adminMusicsService.loadAllMusics();
  	this.adminMusicsService
			.subject
			.asObservable()
			.subscribe((musics) => {
				this.musics = musics
			})
  }

}
