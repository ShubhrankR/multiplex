import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../../data/services/data.service";
import {ActivatedRoute, Router, UrlSegment} from "@angular/router";
import {
    GetPopularMoviesAPIResponseModel,
    GetTopRatedMoviesAPIResponseModel,
    MovieDetailModel
} from "../../../../../data/schema/data.model";
import {DataApiConstants} from "../../../../../data/data-api.constants";

@Component({
    selector: 'multiplex-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    displayMoviesDataSet!: MovieDetailModel[];
    originalMoviesDataSet!: MovieDetailModel[];
    moviesLoaded = false;
    moviesNotFound = false;

    constructor(private dataService: DataService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.checkRoutePath();
    }

    /**
     *
     */
    checkRoutePath() {
        this.activatedRoute.url.subscribe({
            next: (val: UrlSegment[]) => {
                switch (val[0].path) {
                    case 'topRated':
                        this.fetchTopRatedMovies();
                        break;
                    case 'popular':
                        this.fetchPopularMovies();
                        break;
                    default:
                        console.log('Not Possible');
                }
            }
        });
    }

    /**
     *
     */
    fetchTopRatedMovies() {
        this.dataService.getTopRatedMovies(1).subscribe({
            next: (response: GetTopRatedMoviesAPIResponseModel) => {
                this.createMoviesDataSet(response.results)
            },
            error: (error) => {
                console.error(error)
            }
        });
    }

    /**
     *
     */
    fetchPopularMovies() {
        this.dataService.getPopularMovies(1).subscribe({
            next: (response: GetPopularMoviesAPIResponseModel) => {
                this.createMoviesDataSet(response.results)
            },
            error: (error) => {
                console.error(error)
            }
        });
    }

    /**
     *
     * @param movies
     */
    createMoviesDataSet(movies: MovieDetailModel[]) {
        this.displayMoviesDataSet = movies.map((film: MovieDetailModel) => {
            return {
                ...film,
                poster_path: DataApiConstants.apiRoutes.poster_image_sizes.w342 + film.poster_path
            }
        });
        this.originalMoviesDataSet = JSON.parse(JSON.stringify(this.displayMoviesDataSet));
        this.moviesLoaded = true;
    }

    /**
     *
     * @param searchKeyword
     */
    updateMoviesDataSetWithSearchKeyword(searchKeyword: string) {
        if (searchKeyword === '' || searchKeyword === void 0) {
            this.moviesNotFound = false;
            this.displayMoviesDataSet = JSON.parse(JSON.stringify(this.originalMoviesDataSet));
            return;
        }
        this.displayMoviesDataSet = this.originalMoviesDataSet.filter((film: MovieDetailModel) => {
            return film.title.toLocaleLowerCase().includes(searchKeyword.toLocaleLowerCase());
        });
        this.moviesNotFound = this.displayMoviesDataSet.length === 0;
    }

    redirectTo(movieId: number) {
        this.router.navigate(['movies/movieDetails/' + movieId]);
    }
}
