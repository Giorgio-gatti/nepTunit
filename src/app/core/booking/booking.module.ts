import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {BookingComponent} from "./booking.component";



@NgModule({
    imports: [
        HttpClientModule,
        CommonModule
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
