import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService 
{
    apiUrl: string
    defaultParams = []
    headers

    constructor(private http: Http) {
        this.apiUrl = environment.rootApiUrl
        this.headers = new Headers()
        this.headers.append('Content-Type', 'multipart/form-data')
    }
    
    get(url) {
        return this.http.get(this.apiUrl + url)
    }

    post(url, body) {
    	return this.http.post(this.apiUrl + url, body, { headers: this.headers })
    }

    delete(url) {
        return this.http.delete(this.apiUrl + url)
    }

    patch(url, body) {
        return this.http.patch(this.apiUrl + url, body)
    }
}