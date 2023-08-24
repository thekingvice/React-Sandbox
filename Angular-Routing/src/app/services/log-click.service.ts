import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogClickService {
  constructor() {}

  logClick() {
    console.log('click');
  }
}
