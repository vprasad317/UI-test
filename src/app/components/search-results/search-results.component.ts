import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  queryParams: any;
  booksData: any;
  isLoading = false;
  isError = false;
  noData = false;

  constructor(private router: ActivatedRoute, private service: SearchService) { }

  ngOnInit(): void {
    const params = this.getQueryParams();
    this.isLoading = true;
    this.service.getBooksData(params).subscribe(data => {
     if (data && Object.keys(data) && Object.keys(data).length && data.books.length) {
        this.isLoading = false;
        this.isError = false;
        this.noData = false;
        this.booksData = data.books;
        console.log(this.booksData);
      } else {
        this.isLoading = false;
        this.noData = true;
      }
    }, err => {
      this.isLoading = false;
      this.isError = true;
    })
  }

  getQueryParams(): any {
    this.queryParams;
    this.router.queryParams.subscribe(data => {
      this.queryParams =  data;
    })
    return this.queryParams;
  }

}
