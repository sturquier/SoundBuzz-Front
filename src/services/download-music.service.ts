import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { ApiService } from './api.service'
import { MusicModel } from '../models/music'

@Injectable()
export class DownloadMusicService
{
    subject: Subject<Array<MusicModel>> = new Subject()

    constructor(private apiService: ApiService) {

    }

    /**
     * Download a single music : increment downloads number
     */
    downloadMusic(musicId: number) {
        return new Promise((resolve, reject) => {
            this
                .apiService
                .patch(`/musics/${musicId}/download`, {})
                .subscribe(
                    (response) => {
                        this.subject.next(response.json())
                        resolve(response.json())
                    },
                    (error) => {
                        this.subject.error(error.json())
                        reject(error)
                    }
                )
        })
    }
}