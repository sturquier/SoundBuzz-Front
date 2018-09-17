import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';
import { AddMusicService } from '../../../../services/add-music.service'

@Component({
	selector: 'app-add-music',
	templateUrl: './add-music.component.html',
	styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
	
	addMusicForm: FormGroup;
	submitted = false
	error = ""
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}

	constructor(private formBuilder: FormBuilder, private addMusicService: AddMusicService) { }

	ngOnInit() {
		this.addMusicForm = this.formBuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			file: ['', Validators.required],
			is_explicit: [0, Validators.required],
			downloadable: [1, Validators.required],
			created_at: ['', Validators.required],
			is_active: [1, Validators.required]
		})
	}
	
	onAddMusic() {
		this.submitted = true

		console.log(this.addMusicForm.controls.file)

		this.addMusicService.createMusic(
			this.addMusicForm.controls.title.value,
			this.addMusicForm.controls.description.value,
			this.addMusicForm.controls.file.value,
			this.addMusicForm.controls.is_explicit.value,
			this.addMusicForm.controls.downloadable.value,
			this.addMusicForm.controls.created_at.value.formatted,
			this.addMusicForm.controls.is_active.value,
		)

		this.addMusicService
			.subject
			.asObservable()
			.subscribe(
				(result) => {
					console.log(result)
					// Redirect ?
				},
				(error) => {
					this.error = error
					console.log(error)
				}
			)
	}



}
