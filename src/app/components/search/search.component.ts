import { Component, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchCtrl = new FormControl('', [Validators.required]);
  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  getBooks(): void {
    this.router.navigate(['search-results'],
      {
        relativeTo: this.activateRoute,
        queryParams: {
          bookName: this.searchCtrl.value,
        }
      }).then(() => {
        window.location.reload();
      });
  }
}
