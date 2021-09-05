import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallCenterComponent } from './call-center.component';

describe('CallCenterComponent', () => {
  let component: CallCenterComponent;
  let fixture: ComponentFixture<CallCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
