import { Component } from '@angular/core';
import { LogClickService } from './services/log-click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private logClickService: LogClickService) {}

  title = 'Angular-Routing';

  clickLogger() {
    this.logClickService.logClick();
  }
}
