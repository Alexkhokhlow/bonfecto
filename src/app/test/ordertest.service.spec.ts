import { TestBed } from '@angular/core/testing';

import { OrdertestService } from './ordertest.service';

describe('OrdertestService', () => {
  let service: OrdertestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdertestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
