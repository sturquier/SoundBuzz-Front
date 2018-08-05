import { MusicModel } from './music'

export interface GenreModel
{
	id: number,
	name: string,
	slug: string,
	photo?: Object,
	musics?: MusicModel  
}