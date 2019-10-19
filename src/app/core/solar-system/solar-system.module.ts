import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {SolarSystemComponent} from "./solar-system.component";



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    SolarSystemComponent
  ],
  providers: [
  ],
  exports: [
    SolarSystemComponent
  ],
  entryComponents: [
  ]
})
export class SolarSystemModule { }
