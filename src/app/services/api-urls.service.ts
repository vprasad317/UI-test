import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlsService {

  apiBaseUrl = "https://cors-anywhere.herokuapp.com/https://api.itbook.store/1.0/";
  searchBooksUrl: string;

  constructor() { 
    this.getBooks();
  }

  getBooks(): void {
    this.searchBooksUrl = this.apiBaseUrl + 'search/{query}';
  }
}
