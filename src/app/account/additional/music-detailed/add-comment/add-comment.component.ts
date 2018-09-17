import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MusicDetailedService } from '../../../../../services/music-detailed.service'
import { AddCommentService } from '../../../../../services/add-comment.service'
import { UserService } from '../../../../../services/user.service'
import { MusicModel } from '../../../../../models/music'
import { AuthTokenModel } from '../../../../../models/authToken';

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
	user: AuthTokenModel

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private route: ActivatedRoute,
		private musicDetailedService: MusicDetailedService,
		private commentService: AddCommentService,
		private userService: UserService
	) {
		this.user = this.userService.getCurrentUser()
	}

	ngOnInit() {
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

		this.addCommentForm = this.formBuilder.group({
			content: ['', Validators.required]
		})
	}

	onAddComment() {
		this.submitted = true
		this.commentService.addCommentToMusic(this.musicId, this.user.user.id, this.addCommentForm.controls.content.value)

		this.commentService
			.subject
			.asObservable()
			.subscribe(
				(result) => {
					this.loadSingleMusic()
				},
				(error) => { this.submitted = false }
			)
	}
}