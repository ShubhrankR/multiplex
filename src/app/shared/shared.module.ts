import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {CoreModule} from "../core/core.module";


@NgModule({
    declarations: [
        MovieCardComponent,
        LoadingComponent,
        SearchBarComponent
    ],
    imports: [
        CommonModule,
        CoreModule
    ],
    exports: [
        MovieCardComponent,
        LoadingComponent,
        SearchBarComponent
    ]
})
export class SharedModule {
}
