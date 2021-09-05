import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomyComponent } from './autonomy.component';

describe('AutonomyComponent', () => {
  let component: AutonomyComponent;
  let fixture: ComponentFixture<AutonomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutonomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
