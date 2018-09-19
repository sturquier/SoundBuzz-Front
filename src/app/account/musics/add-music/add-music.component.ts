import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus, UploadProgress } from 'ngx-uploader';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { AddMusicService } from '../../../../services/add-music.service';
import { environment } from '../../../../environments/environment.prod';

@Component({
	selector: 'app-add-music',
	templateUrl: './add-music.component.html',
	styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
	uploadInput = new EventEmitter<UploadInput>();
	options: UploaderOptions;
	loading: boolean = false;
	formData: FormData;
	file: any;
	files: UploadFile[];
	humanizeBytes: Function;
	dragOver: boolean;
	progress: UploadProgress;
	addMusicForm: FormGroup;
	submitted = false;
	error = false;
	myOptions: INgxMyDpOptions = {
		dateFormat: 'yyyy-mm-dd'
	}

	constructor(private formBuilder: FormBuilder, private addMusicService: AddMusicService, private router: Router) {
		this.files = [];
		this.humanizeBytes = humanizeBytes;
	    // concurrency of how many files can be uploaded in parallel
	 }

	ngOnInit() {
		this.addMusicForm = this.formBuilder.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			file: [null, Validators.required],
			is_explicit: [0, Validators.required],
			downloadable: [1, Validators.required],
			created_at: ['', Validators.required],
			is_active: [1, Validators.required]
		})
	}

	onUploadOutput(output: UploadOutput) {
		console.log(output)
	    if (output.type === 'allAddedToQueue') { // when all files added in queue
	    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
			if (this.files.length > 0) {
				//remove previous file
				this.files.pop();
			}
			this.files.push(output.file);
			this.addMusicForm.get('file').setValue(output.file.name);
			console.log(output.file)
	  } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
	      // update current data in files array for uploading file
	      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
	      this.files[index] = output.file;
	  } else if (output.type === 'removed') {
	      // remove file from array when removed
	      this.files = this.files.filter((file: UploadFile) => file !== output.file);
	  } else if (output.type === 'dragOver') {
	  	this.dragOver = true;
	  } else if (output.type === 'dragOut') {
	  	this.dragOver = false;
	  } else if (output.type === 'drop') {
	  	this.dragOver = false;
	  }
	  this.files = this.files.filter(file => file.progress.status !== UploadStatus.Done);
	  if (output.type === 'start') {
	  	this.progress = output.file.progress;
	  	this.loading = true;
	  }if (output.type === 'uploading') {
	  	this.progress = output.file.progress;

	  }
	  if (output.type === 'done') {
	  	this.progress = output.file.progress;
	  	this.loading = false;
	  	if (output.file.responseStatus != (200 || 201)) {
	  		this.error = true;
	  	} else {
  			this.router.navigate(['/account/musics']);
	  	}
	  }
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
	
	startUpload() {
		this.addMusicForm.controls['created_at'].setValue(this.addMusicForm.controls.created_at.value.formatted)
		const event: UploadInput = {
			type: 'uploadAll',
			url: environment.rootApiUrl + '/musics',
			method: 'POST',
			data: this.addMusicForm.value
		}
		this.uploadInput.emit(event);
	}

	removeFile(id: string): void {
		this.uploadInput.emit({ type: 'remove', id: id });
		this.addMusicForm.get('file').setValue('');
	}

	onAddMusic() {
		this.submitted = true
		console.log(this.addMusicForm.value)
		this.startUpload()
		// this.addMusicService.createMusic(this.addMusicForm.value)
		// this.addMusicService
		// 	.subject
		// 	.asObservable()
		// 	.subscribe(
		// 		(result) => {
		// 			console.log(result)
		// 			// Redirect ?
		// 		},
		// 		(error) => {
		// 			this.error = error
		// 			console.log(error)
		// 		}
		// 	)
	}



}
