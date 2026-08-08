import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NonLoggedInGuard implements CanActivate {
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
            return true;
        } else {
            this.router.navigate(['home']);
            this.toaster.error('Sorry! You cannot access this page while you are logged in.');
            return false;
        }
    }
}
