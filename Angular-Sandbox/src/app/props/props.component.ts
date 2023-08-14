import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-props',
  templateUrl: './props.component.html',
  styleUrls: ['./props.component.css'],
})
export class PropsComponent {
  @Output() resetEvent = new EventEmitter();

  resetCount() {
    this.resetEvent.emit();
  }
}
