import { MusicModel } from './music'
import { UserModel } from './user'

export interface PlaylistModel
{
	id?: number,
	name: string,
	description?: string,
	is_private: boolean,
	musics?: MusicModel,
	user?: UserModel
}