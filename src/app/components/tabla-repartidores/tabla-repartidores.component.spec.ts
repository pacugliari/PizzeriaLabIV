import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRepartidoresComponent } from './tabla-repartidores.component';

describe('TablaRepartidoresComponent', () => {
  let component: TablaRepartidoresComponent;
  let fixture: ComponentFixture<TablaRepartidoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaRepartidoresComponent]
    });
    fixture = TestBed.createComponent(TablaRepartidoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
