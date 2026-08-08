import { Component, input } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MovieDetailModel } from '../../../data/schema/data.model';

@Component({
    selector: 'multiplex-movie-card',
    standalone: true,
    imports: [NgStyle],
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
    /**
     * Angular Signal Input: Declares a required input signal.
     * Accessing `movie()` returns the current MovieDetailModel reactively.
     */
    readonly movie = input.required<MovieDetailModel>();

    /**
     * Angular Signal Inputs: Optional input signals with default values.
     */
    readonly maxWidth = input<string>('200px');
    readonly minHeight = input<string>('331px');
}
