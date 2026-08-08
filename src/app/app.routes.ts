import { Routes } from '@angular/router';
import { WrapperComponent } from './layout/core/wrapper/wrapper.component';
import { NonLoggedInGuard } from './core/guards/non-logged-in.guard';
import { LoggedInGuard } from './core/guards/logged-in.guard';
import { FourOFourComponent } from './layout/static/four-o-four/four-o-four.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: WrapperComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('./layout/modules/user/login/login.component').then(m => m.LoginComponent),
                canActivate: [NonLoggedInGuard]
            },
            {
                path: 'home',
                loadComponent: () => import('./layout/modules/landing/landing.component').then(m => m.LandingComponent),
                canActivate: [LoggedInGuard]
            },
            {
                path: 'movies/movieDetails/:id',
                loadComponent: () => import('./layout/modules/movies/pages/about-movie/about-movie.component').then(m => m.AboutMovieComponent),
                canActivate: [LoggedInGuard]
            },
            {
                path: 'movies/:path',
                loadComponent: () => import('./layout/modules/movies/pages/movies/movies.component').then(m => m.MoviesComponent),
                canActivate: [LoggedInGuard]
            }
        ]
    },
    {
        path: '404-not-found',
        component: FourOFourComponent
    },
    {
        path: '**',
        redirectTo: '404-not-found',
        pathMatch: 'full'
    }
];
