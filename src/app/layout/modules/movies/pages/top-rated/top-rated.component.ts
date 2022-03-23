import {Component, OnInit} from '@angular/core';
import {
    GetTopRatedMoviesAPIResponseModel,
    MovieDetailAPIResponseModel,
    MovieDetailModel
} from "../../../../../data/schema/data.model";
import {DataService} from "../../../../../data/services/data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'multiplex-top-rated',
    templateUrl: './top-rated.component.html',
    styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
    displayMoviesDataSet!: MovieDetailModel[];
    moviesLoaded = false;

    constructor(private dataService: DataService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.fetchTopMovies();
    }

    fetchTopMovies() {
        this.dataService.getTopRatedMovies(1).subscribe({
            next: (response: GetTopRatedMoviesAPIResponseModel) => {
                this.createMoviesDataSet(response.results)
            },
            error: (error) => {
                console.error(error)
            }
        });
    }

    createMoviesDataSet(movies: MovieDetailModel[]) {
        this.displayMoviesDataSet = movies.map((film: MovieDetailModel) => {
            return {
                ...film,
                poster_path: 'https://image.tmdb.org/t/p/w300/' + film.poster_path
            }
        })
        this.moviesLoaded = true;
    }
}
