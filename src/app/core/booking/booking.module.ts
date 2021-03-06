import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BookingComponent} from "./booking.component";
import {BookingSummaryModule} from "../booking-summary/bookingSummary.module";


@NgModule({
    imports: [
        HttpClientModule,
        CommonModule,
        BookingSummaryModule
    ],
    declarations: [
        BookingComponent
    ],
    providers: [
    ],
    exports: [
        BookingComponent
    ],
    entryComponents: [
    ]
})
export class BookingModule { }
