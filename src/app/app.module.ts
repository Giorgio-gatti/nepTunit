import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarModule} from "./core/navbar/navbar.module";
import { RouterModule, Routes } from '@angular/router';
import {SolarSystemComponent} from "./core/solar-system/solar-system.component";
import {HomePageComponent} from "./core/home-page/home-page.component";
import {BookingComponent} from "./core/booking/booking.component";

const appRoutes: Routes = [
  { path: 'solarMap', component: SolarSystemComponent },
    {path: 'booking', component: BookingComponent},
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponent,
    HomePageComponent,
      BookingComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    NavbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
