import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarslistComponent } from './carslist.component';

describe('CarslistComponent', () => {
  let component: CarslistComponent;
  let fixture: ComponentFixture<CarslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarslistComponent]
    });
    fixture = TestBed.createComponent(CarslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
