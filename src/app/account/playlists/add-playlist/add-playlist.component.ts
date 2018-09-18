import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AddPlaylistService } from '../../../../services/add-playlist.service'
import { UserService } from '../../../../services/user.service'

@Component({
  	selector: 'app-add-playlist',
  	templateUrl: './add-playlist.component.html',
  	styleUrls: ['./add-playlist.component.css']
})
export class AddPlaylistComponent implements OnInit {

	addPlaylistForm: FormGroup
	submitted = false
	error = ""
	currentUser

 	constructor(
 		private formBuilder: FormBuilder, 
 		private addPlaylistService: AddPlaylistService,
 		private userService: UserService,
 		private router: Router
 	) { }

  	ngOnInit() {
  		this.addPlaylistForm = this.formBuilder.group({
  			name: ['', Validators.required],
  			description: ['', Validators.required],
  			is_private: [0, Validators.required]
  		})

  		this.currentUser = this.userService.getCurrentUser()
  	}

  	onAddPlaylist() {
  		this.submitted = true

  		this.addPlaylistService.createPlaylist(
  			this.addPlaylistForm.controls.name.value,
  			this.addPlaylistForm.controls.description.value,
  			this.addPlaylistForm.controls.is_private.value,
  			this.currentUser.user.id,
  		)

  		this.addPlaylistService
  			.subject
  			.asObservable()
  			.subscribe(
  				(result) => {
  					this.router.navigate(['/account/playlists'])
  				},
  				(error) => {
  					this.error = error.message
  					console.log(error)
  				}
  			)
  	}

}
