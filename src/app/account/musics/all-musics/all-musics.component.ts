import { Component, OnInit } from '@angular/core';
import { MusicService } from '../../../../services/music.service';
import { MusicModel } from '../../../../models/music';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-all-musics',
  templateUrl: './all-musics.component.html',
  styleUrls: ['./all-musics.component.css']
})
export class AllMusicsComponent implements OnInit {
  musics: MusicModel[];

  constructor(private musicService: MusicService, private userService: UserService) { }

  ngOnInit() {
    this.musicService.loadUserMusics(this.userService.getCurrentUser().user.id)
    this.musicService
			.subject
			.asObservable()
			.subscribe((musics) => {
				this.musics = musics
			})
  }

}
