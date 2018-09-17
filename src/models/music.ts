import { GenreModel } from './genre'
import { ArtistModel } from './artist'

export interface MusicModel
{
	id?: number,
	title: string,
	description?: string,
	file: string,
	photo?: Object,
	is_explicit: boolean,
	downloadable: boolean,
	created_at: Date,
	transfer_at: Date,
	duration?: number,
	is_active: boolean,
	downloads?: number,
	genres: GenreModel,
	artists: ArtistModel
}