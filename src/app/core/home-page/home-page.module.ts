import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {HomePageComponent} from "./home-page.component";



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    HomePageComponent
  ],
  providers: [
  ],
  exports: [
    HomePageComponent
  ],
  entryComponents: [
  ]
})
export class HomePageModule { }
