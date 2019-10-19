import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarModule} from "./core/navbar/navbar.module";
import { RouterModule, Routes } from '@angular/router';
import {SolarSystemComponent} from "./core/solar-system/solar-system.component";
import {HomePageComponent} from "./core/home-page/home-page.component";

const appRoutes: Routes = [
  { path: 'solarMap', component: SolarSystemComponent },
  { path: 'home', component: HomePageComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    SolarSystemComponent,
    HomePageComponent
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
