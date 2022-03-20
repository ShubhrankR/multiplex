import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'multiplex-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isLoggedIn = false;

    constructor(private authService: AuthService,
                private router: Router) {
        this.authService.currentUserState.subscribe({
            next: (val: boolean) => {
                this.isLoggedIn = val;
            }
        });
    }

    ngOnInit(): void {
    }

    logout() {
        this.authService.logoutUser();
        this.router.navigate(['login']);
    }

}
