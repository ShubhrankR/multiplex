import {Component, Input, OnInit} from '@angular/core';
import {MovieDetailModel} from "../../../data/schema/data.model";
import {Router} from "@angular/router";

@Component({
    selector: 'multiplex-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() movie!: MovieDetailModel;
    @Input() maxWidth!: string;
    @Input() minHeight!: string;

    constructor(private router: Router) {
    }

    ngOnInit(): void {
    }

    redirectTo(movieId: number) {
        this.router.navigate(['movies/movieDetails/' + movieId]);
    }

}
