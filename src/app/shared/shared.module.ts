import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import { LoadingComponent } from './components/loading/loading.component';


@NgModule({
    declarations: [
        MovieCardComponent,
        LoadingComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        MovieCardComponent,
        LoadingComponent
    ]
})
export class SharedModule {
}
