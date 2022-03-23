import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FourOFourComponent} from "./static/four-o-four/four-o-four.component";
import {NonLoggedInGuard} from "../core/guards/non-logged-in.guard";
import {LoggedInGuard} from "../core/guards/logged-in.guard";

const routes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule),
        canActivate: [NonLoggedInGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
        canActivate: [LoggedInGuard]
    },
    {
        path: 'movies',
        loadChildren: () => import('./modules/movies/movies.module').then(m => m.MoviesModule),
        canActivate: [LoggedInGuard]
    },
    {
        path: '404-not-found',
        component: FourOFourComponent
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}
