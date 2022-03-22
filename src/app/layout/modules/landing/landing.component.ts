import {Component, OnInit, Renderer2} from '@angular/core';
import {DataService} from "../../../data/services/data.service";
import {GetTopRatedMoviesAPIResponseModel, MovieDetailModel} from "../../../data/schema/data.model";

@Component({
    selector: 'multiplex-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
    displayMoviesDataSet!: MovieDetailModel[];
    moviesLoaded = false;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.fetchTopMovies();
        this.dataService.getMovieDetail(278).subscribe({
            next: (response) => {
                console.log('Movie detail -', response)
            }
        })
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
