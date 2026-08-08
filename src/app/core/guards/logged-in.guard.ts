import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router,
        private toaster: ToastrService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree {
        // Read auth state directly from the isLoggedIn signal
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['login']);
            this.toaster.error('You need to be logged-in before viewing this page.');
            return false;
        }
        return true;
    }
}
