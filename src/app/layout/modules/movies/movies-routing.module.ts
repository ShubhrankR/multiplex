import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMovieComponent} from "./pages/about-movie/about-movie.component";
import {MoviesComponent} from "./pages/movies/movies.component";

const routes: Routes = [
    {
        path: 'topRated',
        component: MoviesComponent
    },
    {
        path: 'popular',
        component: MoviesComponent
    },
    {
        path: 'movieDetails/:id',
        component: AboutMovieComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule {
}
