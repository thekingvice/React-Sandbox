import { Component } from '@angular/core';
import axios from 'axios';
// import fetchAdvice from '../services/advice.service';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css'],
})
export class FetchComponent {
  fetchAdvice() {
    const cacheBuster = new Date().getTime(); // Generate a unique value
    const apiUrl = `https://api.adviceslip.com/advice?nocache=${cacheBuster}`;

    axios({
      method: 'get',
      url: apiUrl,
    })
      .then((response) => {
        // Handle successful response
        console.log(response.data.slip.advice);
      })
      .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
      });
  }
}
