import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MoviesRoutingModule} from './movies-routing.module';
import {CoreModule} from "../../../core/core.module";
import {SharedModule} from "../../../shared/shared.module";
import {TopRatedComponent} from './pages/top-rated/top-rated.component';
import {AboutMovieComponent} from './pages/about-movie/about-movie.component';


@NgModule({
    declarations: [
        TopRatedComponent,
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
