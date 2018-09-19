import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AdminService } from '../../../../services/admin.service'

@Component({
	selector: 'admin-add-genre',
	templateUrl: './admin-add-genre.component.html',
	styleUrls: ['./admin-add-genre.component.css']
})
export class AdminAddGenreComponent implements OnInit {

  	addGenreForm: FormGroup
 	submitted = false
  	error = ""
  	nativeFile

   	constructor(
		private formBuilder: FormBuilder, 
	 	private adminService: AdminService,
	 	private router: Router
   	) { }

	ngOnInit() {
	  	this.addGenreForm = this.formBuilder.group({
			name: ['', Validators.required],
			photo: [null, Validators.required],
	  	})
	}

	addFile(event) {
		const reader = new FileReader();

		console.log(event.target.files)
		if (event.target.files && event.target.files.length) {
			const [photo] = event.target.files
			console.log(photo)
			reader.readAsDataURL(photo)
		}

		reader.onload = () => {
			console.log(reader.result)
			this.addGenreForm.patchValue({
				photo: reader.result
			})
		}
	}

	onCreateGenre() {
	  	this.submitted = true

	  	// console.log(this.nativeFile)

	  	this.adminService.createGenre(
			this.addGenreForm.controls.name.value,
			this.nativeFile,
	  	)

	  	this.adminService
			.genreSubject
			.asObservable()
			.subscribe(
				(result) => {
					this.router.navigate(['/admin/genres'])
		  		},
		  		(error) => {
					this.error = error
					console.log(error)
		  		}
			)
	}
}
