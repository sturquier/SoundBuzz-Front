import { Component, OnInit } from '@angular/core';
import { MusicModel } from '../../../models/music'
import { AdminService } from '../../../services/admin.service'


@Component({
	selector: 'admin-musics',
	templateUrl: './admin-musics.component.html',
	styleUrls: ['./admin-musics.component.css'],
})

export class AdminMusicsComponent implements OnInit {
	
	musics: MusicModel[]
	p: number = 1;

	constructor(
		private adminService: AdminService
	) { }

  	ngOnInit() {
		this.adminService.loadAllMusics();
		this.adminService
			.subject
			.asObservable()
			.subscribe((musics) => {
				this.musics = musics
			})
  	}
}
