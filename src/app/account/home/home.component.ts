import { Component, OnInit } from '@angular/core'
import { HomeService } from '../../../services/home.service'
import { GenreModel } from '../../../models/genre'
import { environment } from '../../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	genres: any
  apiUrl: string

  	constructor(private homeService: HomeService) { 
      this.apiUrl = environment.rootApiUrl
    }

  	ngOnInit() {
  		this.homeService.loadAllGenres()
  		this.homeService
  			.subject
  			.asObservable()
  			.subscribe((genres) => {
          if (genres) {
            for (let i = 0; i < genres.length; i++) {
              genres[i]['url'] = this.apiUrl + '/uploads/genres/' + genres[i]['photo']
            }
            this.genres = genres
          }
        })
    }

}
