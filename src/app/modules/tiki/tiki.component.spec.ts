import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TikiComponent } from './tiki.component';

describe('TikiComponent', () => {
  let component: TikiComponent;
  let fixture: ComponentFixture<TikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
