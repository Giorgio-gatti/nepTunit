import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {NavbarComponent} from "./navbar.component";



@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    NavbarComponent
  ],
  providers: [
  ],
  exports: [
    NavbarComponent
  ],
  entryComponents: [
  ]
})
export class NavbarModule { }
