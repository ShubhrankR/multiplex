import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastrModule} from "ngx-toastr";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ToastrModule.forRoot({
            maxOpened: 1
        })
    ],
    exports: [
    ]
})
export class CoreModule {
}
