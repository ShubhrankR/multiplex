import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {CoreModule} from "../../../core/core.module";
import {SharedModule} from "../../../shared/shared.module";
import {AboutMovieComponent} from './pages/about-movie/about-movie.component';
import {MoviesComponent} from './pages/movies/movies.component';


@NgModule({
    declarations: [
        MoviesComponent,
        AboutMovieComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        CoreModule,
        SharedModule
    ]
})
export class MoviesModule {
}
