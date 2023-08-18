import { Component } from '@angular/core';
import fetchAdvice from '../services/adivice.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent {
  fetch() {
    fetchAdvice();
  }
}
