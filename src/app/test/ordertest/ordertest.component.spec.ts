import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdertestComponent } from './ordertest.component';

describe('OrdertestComponent', () => {
  let component: OrdertestComponent;
  let fixture: ComponentFixture<OrdertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdertestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
