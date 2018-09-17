import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MusicDetailedService } from '../../../../../services/music-detailed.service'
import { MusicModel } from '../../../../../models/music'

@Component({
	selector: 'add-comment',
	templateUrl: './add-comment.component.html',
	styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

	music: MusicModel[]
	musicId: number
	addCommentForm: FormGroup
	error = ""
	submitted = false

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService
	) {}

	ngOnInit() {
		console.log(this.route.snapshot)
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

		this.addCommentForm = this.formBuilder.group({
			content: ['', Validators.required]
		})
	}

	onAddComment() {
		this.submitted = true
	}
}