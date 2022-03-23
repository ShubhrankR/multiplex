import {Component, OnInit, Renderer2} from '@angular/core';
import {DataService} from "../../../data/services/data.service";
import {GetTopRatedMoviesAPIResponseModel, MovieDetailModel} from "../../../data/schema/data.model";

@Component({
    selector: 'multiplex-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
    }
}
