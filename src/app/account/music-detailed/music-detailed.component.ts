import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MusicDetailedService } from './music-detailed.service'
import { MusicModel } from '../../../models/music'

@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css']
})
export class MusicDetailedComponent implements OnInit {
	music: MusicModel[]
	music_id: number

	constructor(
		private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.music_id = params.id
		})

		this.musicDetailedService.loadSingleMusic(this.music_id)
		this.musicDetailedService
			.subject
			.asObservable()
			.subscribe((music) => {
				this.music = music
			})
  }

}
