import { Component } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css'],
})
export class AccordianComponent {
  accordianInfo = [
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ];

  openTab(i: number) {
    if (this.accordianInfo[i].isOpen) {
      this.accordianInfo[i].isOpen = false;
    } else {
      this.accordianInfo[i].isOpen = true;
    }
  }
}
