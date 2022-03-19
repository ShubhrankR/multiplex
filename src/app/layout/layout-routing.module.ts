import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {FourOFourComponent} from "./static/four-o-four/four-o-four.component";

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule),
        canActivate: []
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/user/login/login.module').then(m => m.LoginModule),
        canActivate: []
    },
    {
        path: '404-not-found',
        component: FourOFourComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {

}
