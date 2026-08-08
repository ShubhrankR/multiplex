import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'multiplex-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    /**
     * Inject AuthService directly to access the isLoggedIn signal reactively in the template.
     */
    constructor(
        public authService: AuthService,
        private router: Router
    ) {}

    logout(): void {
        this.authService.logoutUser();
        this.router.navigate(['login']);
    }
}
