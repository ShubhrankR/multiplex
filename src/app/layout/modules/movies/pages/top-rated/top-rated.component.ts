import {Component, OnInit} from '@angular/core';
import {GetTopRatedMoviesAPIResponseModel, MovieDetailModel} from "../../../../../data/schema/data.model";
import {DataService} from "../../../../../data/services/data.service";
import {Router} from "@angular/router";

@Component({
    selector: 'multiplex-top-rated',
    templateUrl: './top-rated.component.html',
    styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent implements OnInit {
    displayMoviesDataSet!: MovieDetailModel[];
    originalMoviesDataSet!: MovieDetailModel[];
    moviesLoaded = false;
    moviesNotFound = false;

    constructor(private dataService: DataService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.fetchTopMovies();
        this.dataService.searchAPI().subscribe((res) => {
            console.log('response search -', res)
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
        });
        this.originalMoviesDataSet = JSON.parse(JSON.stringify(this.displayMoviesDataSet));
        this.moviesLoaded = true;
    }

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
}
