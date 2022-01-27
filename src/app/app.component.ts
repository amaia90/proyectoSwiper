import { Component } from '@angular/core';
import Swiper, {Navigation, Pagination} from 'swiper';


Swiper.use([Navigation, Pagination]);
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
