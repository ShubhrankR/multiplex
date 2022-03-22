import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TopRatedComponent} from "./pages/top-rated/top-rated.component";
import {AboutMovieComponent} from "./pages/about-movie/about-movie.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'topRated',
        pathMatch: 'full'
    },
    {
        path: 'topRated',
        component: TopRatedComponent
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
