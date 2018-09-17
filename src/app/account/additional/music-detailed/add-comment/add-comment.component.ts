import { Component, OnInit, Input } from '@angular/core'
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
	@Input() musicId;
	music: MusicModel[]
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