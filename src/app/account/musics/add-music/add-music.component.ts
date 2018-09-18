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
	nativeFile = {}
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
			file: [{}, Validators.required],
			is_explicit: [0, Validators.required],
			downloadable: [1, Validators.required],
			created_at: ['', Validators.required],
			is_active: [1, Validators.required]
		})
	}

	addFile(event) {
		console.log(event.target.files)
		const reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		reader.onloadend = () => {
		  const img = {
			filename: event.target.files[0].name,
			filetype: event.target.files[0].type,
			value: reader.result.split(",")[1]
		  };
		  //console.log(img);
		  this.nativeFile = img;
		};
	}
	
	onAddMusic() {
		this.submitted = true

		this.addMusicForm.controls['file'].setValue(this.nativeFile)
		this.addMusicForm.controls['created_at'].setValue(this.addMusicForm.controls.created_at.value.formatted)
		console.log(this.addMusicForm)

		this.addMusicService.createMusic(this.addMusicForm.value)
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
