import { Component, OnInit } from '@angular/core'
import { HomeService } from './home.service'
import { GenreModel } from '../../../models/genre'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	genres: GenreModel[]

  	constructor(private homeService: HomeService) { }

  	ngOnInit() {
  		this.homeService.loadAllGenres()
  		this.homeService
  			.subject
  			.asObservable()
  			.subscribe(genres => this.genres = genres)
  }

}
