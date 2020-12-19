import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  get(url: string): Observable<any> {
    const options = {
      headers: new HttpHeaders()
      .set('Content-Type', 'application/json')
    }
    return this.http.get(url, {headers: options.headers});
  }
}
