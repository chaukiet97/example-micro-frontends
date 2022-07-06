import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppeComponent } from './shoppe.component';

describe('ShoppeComponent', () => {
  let component: ShoppeComponent;
  let fixture: ComponentFixture<ShoppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
