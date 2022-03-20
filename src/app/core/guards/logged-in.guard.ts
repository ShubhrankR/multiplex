import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class LoggedInGuard implements CanActivate {
    isLoggedIn = false;

    constructor(private authService: AuthService,
                private router: Router,
                private toaster: ToastrService) {
        this.authService.currentUserState.subscribe({
            next: (val: boolean) => {
                this.isLoggedIn = val;
            }
        });
    }

    /**
     * Only for those pages that are visible to logged-in users.
     * @param route
     * @param state
     */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.isLoggedIn) {
            this.router.navigate(['login']);
            this.toaster.error('You need to be logged-in before viewing this page.');
            return false;
        } else {
            return true;
        }
    }

}
