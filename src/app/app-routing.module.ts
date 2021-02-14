import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LatestMoviesComponent } from './latest-movies/latest-movies.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'topMovies',
    component: TopMoviesComponent
  },
  {
    path: 'latestMovies',
    component: LatestMoviesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
