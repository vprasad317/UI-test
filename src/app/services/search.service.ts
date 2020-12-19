import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlsService } from './api-urls.service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private url: ApiUrlsService, private api: ApiService) { }

  getBooksData(params): Observable<any> {
    const url = this.url.searchBooksUrl.replace(/{query}/, params.bookName);
    return this.api.get(url);
  }
}
