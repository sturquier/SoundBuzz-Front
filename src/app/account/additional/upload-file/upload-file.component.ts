import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus, UploadProgress, NgFileSelectDirective, NgFileDropDirective } from 'ngx-uploader';
import { environment } from '../../../../environments/environment';
import { AddMusicService } from '../../../../services/add-music.service';
import { UploadService } from '../../../../services/upload.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})

export class UploadFileComponent implements OnInit {
	ngFileSelect: NgFileSelectDirective;
	ngFileDrop: NgFileDropDirective;
  @Input() form;
  @Input() name;
  @Input() url;
	@Input() route;
	@Input() type;
  options: UploaderOptions;
	loading: boolean = false;
	formData: FormData;
	file: any;
	files: UploadFile[];
	humanizeBytes: Function;
	dragOver: boolean;
	progress: UploadProgress;
  error: boolean = false;

  constructor(private router: Router, private addMusicService: AddMusicService, public uploadService: UploadService) {
    this.uploadService.uploadInput = new EventEmitter<UploadInput>();
		this.files = [];
		this.humanizeBytes = humanizeBytes;
	    // concurrency of how many files can be uploaded in parallel
   }

  ngOnInit() {
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
			this.form.get(this.name).setValue(output.file.name);
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
	  	if (output.file.responseStatus != 201) {
	  		this.error = true;
	  	} else {
  			this.router.navigate([this.route]);
	  	}
	  }
	}

	removeFile(id: string): void {
		this.uploadService.uploadInput.emit({ type: 'remove', id: id });
		this.form.get(this.name).setValue('');
	}

}
