import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { AddMusicService } from '../../../../services/add-music.service';
import { UploadService } from '../../../../services/upload.service';
import { UserService } from '../../../../services/user.service'

@Component({
	selector: 'app-add-music',
	templateUrl: './add-music.component.html',
	styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
	addMusicForm: FormGroup;
	submitted = false;
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}
	currentUser

	constructor(
		private formBuilder: FormBuilder, 
		private addMusicService: AddMusicService, 
		private uploadService: UploadService,
		private userService: UserService,
	) {
		this.currentUser = this.userService.getCurrentUser()
	}

	ngOnInit() {
		this.addMusicForm = this.formBuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			file: [null, Validators.required],
			is_explicit: [0, Validators.required],
			downloadable: [1, Validators.required],
			created_at: ['', Validators.required],
			is_active: [1, Validators.required],
			user: this.currentUser.user.id,
		})
	}
	
	// addFile(event) {
	// 	console.log(event.target.files)

	// 	if(event.target.files && event.target.files.length) {
	// 		const reader = new FileReader();
	// 		reader.readAsDataURL(event.target.files[0]);
	// 		reader.onloadend = () => {
	// 		const img = {
	// 			filename: event.target.files[0].name,
	// 			filetype: event.target.files[0].type,
	// 			value: reader.result.split(",")[1]
	// 		};
	// 		console.log(img);
	// 		this.file = img;
	// 		};
	// 	}
	// 	console.log(this.addMusicForm.value)
	// }

	onAddMusic() {
		this.addMusicForm.controls['created_at'].setValue(this.addMusicForm.controls.created_at.value.formatted)
		console.log(this.addMusicForm.value)
		this.uploadService.startUpload("/musics",this.addMusicForm);	
	}



}
