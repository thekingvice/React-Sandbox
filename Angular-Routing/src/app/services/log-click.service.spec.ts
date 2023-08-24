import { TestBed } from '@angular/core/testing';

import { LogClickService } from './log-click.service';

describe('LogClickService', () => {
  let service: LogClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
