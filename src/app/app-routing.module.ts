import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchDetailsComponent } from './components/search-details/search-details.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [{
  path: '',
  redirectTo: 'search',
  pathMatch: 'full'
},
  {
  path: 'search',
  component: SearchComponent,
  children: [{
    path: 'search-results',
    component: SearchResultsComponent
  },]
},
{
  path: 'search-details',
  component: SearchDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
