import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BookingSummaryComponent} from "./bookingSummary.component";



@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
    ],
    declarations: [
        BookingSummaryComponent
    ],
    providers: [
    ],
    exports: [
        BookingSummaryComponent
    ],
    entryComponents: [
    ]
})
export class BookingSummaryModule { }
