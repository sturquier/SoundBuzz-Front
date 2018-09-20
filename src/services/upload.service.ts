import { Injectable, EventEmitter } from '@angular/core'
import { ApiService } from './api.service'
import { environment } from '../environments/environment.prod';
import { UploadInput } from 'ngx-uploader';

@Injectable()
export class UploadService
{
    uploadInput: EventEmitter<UploadInput>;

	constructor(private apiService: ApiService) {

	}

	/**
	 * 	post a file 
	 */
    startUpload(url, form) {
        console.log('start upload ...')
        const event: UploadInput = {
            type: 'uploadAll',
            url: environment.rootApiUrl + url,
            method: 'POST',
            data: form.value
        }
        this.uploadInput.emit(event);
    }
}