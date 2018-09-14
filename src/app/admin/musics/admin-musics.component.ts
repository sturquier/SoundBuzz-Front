import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../../../models/music'
import { AdminService } from '../../../services/admin.service'


@Component({
  selector: 'app-admin-musics',
  templateUrl: './admin-musics.component.html',
  styleUrls: ['./admin-musics.component.css']
})
export class AdminMusicsComponent implements OnInit {
	music: MusicModel[]
	
  constructor(
  	private adminService: AdminService
  	) {  }

  ngOnInit() {
  	this.adminService.loadAllMusics();
  	this.adminService
			.subject
			.asObservable()
			.subscribe((music) => {
				this.music = music
			})
  }

}
