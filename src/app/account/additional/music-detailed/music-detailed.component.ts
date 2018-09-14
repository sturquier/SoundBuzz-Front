import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MusicDetailedService } from '../../../../services/music-detailed.service'
import { MusicModel } from '../../../../models/music'

@Component({
  selector: 'music-detailed',
  templateUrl: './music-detailed.component.html',
  styleUrls: ['./music-detailed.component.css']
})
export class MusicDetailedComponent implements OnInit {
	music: MusicModel[]
	musicId: number

	constructor(
		private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService
	) { }

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.musicId = params.id
		})

		this.musicDetailedService.loadSingleMusic(this.musicId)
		this.musicDetailedService
			.subject
			.asObservable()
			.subscribe((music) => {
				this.music = music
			})
  }

}
