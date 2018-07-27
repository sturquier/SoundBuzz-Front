import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService 
{
    apiUrl: string
    defaultParams = []
    
    constructor(private http: Http) {
        this.apiUrl = environment.rootApiUrl
    }
    
    get(url) {
        return this.http.get(this.apiUrl + url)
    }
}