import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  count = 0;
  increment() {
    this.count++;
  }
  decrement() {
    if (this.count > 0) {
      this.count--;
    }
  }
  reset() {
    this.count = 0;
  }
}
