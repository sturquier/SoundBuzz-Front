import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
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

    patch(url, body) {
        return this.http.patch(this.apiUrl + url, body)
    }

    private createAuthorizationHeader(headers: Headers)
    {
        headers.append("Content-Type", "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2))
    }

    postWithFormData(url, body)
    {
        let headers = new Headers()
        this.createAuthorizationHeader(headers)

        return this.http.post(this.apiUrl + url, body, { headers: headers })
    }
}