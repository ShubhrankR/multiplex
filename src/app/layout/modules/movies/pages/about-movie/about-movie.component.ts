import {Component, OnInit} from '@angular/core';
import {MovieDetailAPIResponseModel} from "../../../../../data/schema/data.model";
import {DataService} from "../../../../../data/services/data.service";
import {ActivatedRoute} from "@angular/router";
import {DataApiConstants} from "../../../../../data/data-api.constants";

@Component({
    selector: 'multiplex-about-movie',
    templateUrl: './about-movie.component.html',
    styleUrls: ['./about-movie.component.scss']
})
export class AboutMovieComponent implements OnInit {
    movieId!: number;
    movieInfoLoaded = false;
    movieInfo!: MovieDetailAPIResponseModel;

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.dataService.getTmDbConfig().subscribe((r) => console.log('config =', r));
        this.movieId = this.activatedRoute.snapshot.params['id'];
        this.dataService.getMovieDetail(this.movieId).subscribe({
            next: (response: MovieDetailAPIResponseModel) => {
                console.log('Movie detail -', response)
                this.movieInfo = {
                    ...response,
                    backdrop_path: DataApiConstants.apiRoutes.backdrop_image_sizes.w1280 + response.backdrop_path
                };
                console.log('Movie detail -', this.movieInfo)
                this.movieInfoLoaded = true;
            },
            error: (error) => {
                console.error(error);
            }
        })
    }

}
