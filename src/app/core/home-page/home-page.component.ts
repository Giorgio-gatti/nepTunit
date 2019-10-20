import {Component, ViewChild} from '@angular/core';
import { CarouselComponent } from "ngx-carousel-lib";



@Component({
  selector: 'app-homepage',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.css']
})
export class HomePageComponent {

  @ViewChild('topCarousel', {static: false}) topCarousel: CarouselComponent;

  constructor() {
  }

}
