import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {WrapperComponent} from "./layout/core/wrapper/wrapper.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: WrapperComponent,
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)
    },
    {
        path: '**',
        redirectTo: '404-not-found',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
