import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'multiplex-landing',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})
export class LandingComponent {}
