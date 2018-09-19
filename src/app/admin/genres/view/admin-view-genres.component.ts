import { Component, OnInit } from '@angular/core'
import { GenreModel } from '../../../../models/genre'
import { AdminService } from '../../../../services/admin.service'
import { HomeService } from '../../../../services/home.service'

@Component({
	selector: 'admin-view-genres',
	templateUrl: './admin-view-genres.component.html',
	styleUrls: ['./admin-view-genres.component.css']
})
export class AdminViewGenresComponent implements OnInit {

	genres: GenreModel[]
	trash: string = "trash"
	pencil: string = "pen-fancy"

	constructor(private adminService: AdminService, private homeService: HomeService) {

	}

	ngOnInit() {
		this.loadAllGenres()
	}

	loadAllGenres() {
		this.homeService.loadAllGenres()
		this.homeService
			.subject
			.asObservable()
			.subscribe((genres) => {
				this.genres = genres
			})
	}

	onDeleteGenre(genreId) {
		if (confirm("Etes vous sur de supprimer ce genre ?")) {
			this.adminService.deleteGenre(genreId)
			this.adminService
				.genreSubject
				.asObservable()
				.subscribe(
					(result) => { this.loadAllGenres() },
					(error) => console.log(error)
				)
		}
	}
}