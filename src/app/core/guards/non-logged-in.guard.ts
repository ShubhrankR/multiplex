import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class NonLoggedInGuard implements CanActivate {
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
     * Only for those pages that are only visible to non-logged-IN users.
     * @param route
     * @param state
     */
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (!this.isLoggedIn) {
            return true;
        } else {
            this.router.navigate(['']);
            this.toaster.error('Sorry! You cannot access this page while you are logged IN.')
            return false;
        }
    }

}
