import {Component, OnInit} from '@angular/core';
import {MovieDetailAPIResponseModel} from "../../../../../data/schema/data.model";
import {DataService} from "../../../../../data/services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'multiplex-about-movie',
    templateUrl: './about-movie.component.html',
    styleUrls: ['./about-movie.component.scss']
})
export class AboutMovieComponent implements OnInit {
    movieId!: number;

    constructor(private dataService: DataService,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.movieId = this.activatedRoute.snapshot.params['id'];
        this.dataService.getMovieDetail(this.movieId).subscribe({
            next: (response: MovieDetailAPIResponseModel) => {
                console.log('Movie detail -', response)
            },
            error: (error) => {
                console.error(error);
            }
        })
    }

}
