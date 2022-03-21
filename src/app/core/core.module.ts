import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastrModule} from "ngx-toastr";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        ToastrModule.forRoot({
            maxOpened: 1
        })
    ],
    exports: [
    ]
})
export class CoreModule {
}
