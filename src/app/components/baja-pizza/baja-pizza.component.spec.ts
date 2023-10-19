import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BajaPizzaComponent } from './baja-pizza.component';

describe('BajaPizzaComponent', () => {
  let component: BajaPizzaComponent;
  let fixture: ComponentFixture<BajaPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BajaPizzaComponent]
    });
    fixture = TestBed.createComponent(BajaPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
