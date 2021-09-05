import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionSafetyComponent } from './vision-safety.component';

describe('VisionSafetyComponent', () => {
  let component: VisionSafetyComponent;
  let fixture: ComponentFixture<VisionSafetyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisionSafetyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisionSafetyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
