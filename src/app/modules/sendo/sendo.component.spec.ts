import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendoComponent } from './sendo.component';

describe('SendoComponent', () => {
  let component: SendoComponent;
  let fixture: ComponentFixture<SendoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
