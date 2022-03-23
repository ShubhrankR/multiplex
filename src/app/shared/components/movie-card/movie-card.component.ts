import {Component, Input, OnInit} from '@angular/core';
import {MovieDetailModel} from "../../../data/schema/data.model";

@Component({
    selector: 'multiplex-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input() movie!: MovieDetailModel;
    @Input() maxWidth!: string;
    @Input() minHeight!: string;

    constructor() {
    }

    ngOnInit(): void {
    }

}
