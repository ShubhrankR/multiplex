import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutRoutingModule} from "./layout-routing.module";
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { WrapperComponent } from './core/wrapper/wrapper.component';
import { FourOFourComponent } from './static/four-o-four/four-o-four.component';


@NgModule({
    declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    FourOFourComponent
  ],
    imports: [
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule {
}
