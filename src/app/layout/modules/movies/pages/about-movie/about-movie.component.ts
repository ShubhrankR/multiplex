import { Component, OnInit, signal } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailAPIResponseModel } from '../../../../../data/schema/data.model';
import { DataService } from '../../../../../data/services/data.service';
import { DataApiConstants } from '../../../../../data/data-api.constants';
import { LoadingComponent } from '../../../../../shared/components/loading/loading.component';

@Component({
    selector: 'multiplex-about-movie',
    standalone: true,
    imports: [NgStyle, LoadingComponent],
    templateUrl: './about-movie.component.html',
    styleUrls: ['./about-movie.component.scss']
})
export class AboutMovieComponent implements OnInit {
    movieId!: number;

    /**
     * Angular Signals: Reactive state management for single movie details.
     */
    readonly movieInfoLoaded = signal<boolean>(false);
    readonly movieInfo = signal<MovieDetailAPIResponseModel | null>(null);

    constructor(
        private dataService: DataService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.movieId = this.activatedRoute.snapshot.params['id'];
        this.dataService.getMovieDetail(this.movieId).subscribe({
            next: (response: MovieDetailAPIResponseModel) => {
                const formattedDetail: MovieDetailAPIResponseModel = {
                    ...response,
                    backdrop_path: DataApiConstants.apiRoutes.backdrop_image_sizes.w1280 + response.backdrop_path
                };
                this.movieInfo.set(formattedDetail);
                this.movieInfoLoaded.set(true);
            },
            error: (error) => {
                console.error('Failed to load movie details:', error);
            }
        });
    }
}
