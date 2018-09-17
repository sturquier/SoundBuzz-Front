import { MusicModel } from './music'

export interface ArtistModel
{
	id: number,
	name: string,
	type: number,
	musics: MusicModel
}