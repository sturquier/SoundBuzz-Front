import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicModel } from '../../../../models/music';

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css']
})
export class AddMusicComponent implements OnInit {
	musicForm: FormGroup;
  music: MusicModel;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.musicForm = this.fb.group({
			title: ['', Validators.required],
      description: '',
      file: ['', Validators.required],
			photo: ['', [Validators.required]],
			is_explicit: 0,
			downloadable: 0,
			created_at: '',
			transfert_at: '',
			duration: 0,
      is_active: 0,
      downloads: 0
		})
  }
  
  submit() {
    console.log(this.musicForm)
  }



}
