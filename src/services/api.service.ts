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

    post(url, body) {
    	return this.http.post(this.apiUrl + url, body)
    }

    delete(url) {
        return this.http.delete(this.apiUrl + url)
    }
}