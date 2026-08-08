import { Component, OnInit, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../../../../data/services/data.service';
import { GetPopularMoviesAPIResponseModel, GetTopRatedMoviesAPIResponseModel, MovieDetailModel } from '../../../../../data/schema/data.model';
import { DataApiConstants } from '../../../../../data/data-api.constants';
import { MovieCardComponent } from '../../../../../shared/components/movie-card/movie-card.component';
import { SearchBarComponent } from '../../../../../shared/components/search-bar/search-bar.component';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

@Component({
    selector: 'multiplex-movies',
    standalone: true,
    imports: [NgStyle, MovieCardComponent, SearchBarComponent, LoadingComponent],
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    /**
     * Angular Signals: Manage reactive state for movies data and view flags.
     * `signal()` creates writable signal instances.
     */
    readonly displayMoviesDataSet = signal<MovieDetailModel[]>([]);
    readonly originalMoviesDataSet = signal<MovieDetailModel[]>([]);
    readonly moviesLoaded = signal<boolean>(false);
    readonly moviesNotFound = signal<boolean>(false);

    constructor(
        private dataService: DataService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.checkRoutePath();
    }

    /**
     * Reads route parameter (:path = 'popular' or 'topRated') via activatedRoute.params
     * and triggers the corresponding TMDB GET API call.
     */
    checkRoutePath(): void {
        this.activatedRoute.params.subscribe({
            next: (params) => {
                const path = params['path'];
                this.moviesLoaded.set(false);
                if (path === 'topRated') {
                    this.fetchTopRatedMovies();
                } else if (path === 'popular') {
                    this.fetchPopularMovies();
                }
            }
        });
    }

    fetchTopRatedMovies(): void {
        this.dataService.getTopRatedMovies(1).subscribe({
            next: (response: GetTopRatedMoviesAPIResponseModel) => {
                if (response && response.results) {
                    this.createMoviesDataSet(response.results);
                }
            },
            error: (error) => {
                console.error('Error fetching top rated movies:', error);
                this.moviesLoaded.set(true);
                this.moviesNotFound.set(true);
            }
        });
    }

    fetchPopularMovies(): void {
        this.dataService.getPopularMovies(1).subscribe({
            next: (response: GetPopularMoviesAPIResponseModel) => {
                if (response && response.results) {
                    this.createMoviesDataSet(response.results);
                }
            },
            error: (error) => {
                console.error('Error fetching popular movies:', error);
                this.moviesLoaded.set(true);
                this.moviesNotFound.set(true);
            }
        });
    }

    createMoviesDataSet(movies: MovieDetailModel[]): void {
        const formattedMovies = movies.map((film: MovieDetailModel) => ({
            ...film,
            poster_path: film.poster_path ? DataApiConstants.apiRoutes.poster_image_sizes.w342 + film.poster_path : 'assets/images/blue_square_2-logo.svg'
        }));

        // Updating signals using .set()
        this.displayMoviesDataSet.set(formattedMovies);
        this.originalMoviesDataSet.set(JSON.parse(JSON.stringify(formattedMovies)));
        this.moviesLoaded.set(true);
    }

    updateMoviesDataSetWithSearchKeyword(searchKeyword: string): void {
        if (!searchKeyword) {
            this.moviesNotFound.set(false);
            this.displayMoviesDataSet.set(JSON.parse(JSON.stringify(this.originalMoviesDataSet())));
            return;
        }

        const filtered = this.originalMoviesDataSet().filter((film: MovieDetailModel) =>
            film.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );

        this.displayMoviesDataSet.set(filtered);
        this.moviesNotFound.set(filtered.length === 0);
    }

    redirectTo(movieId: number): void {
        this.router.navigate(['movies/movieDetails/' + movieId]);
    }
}
