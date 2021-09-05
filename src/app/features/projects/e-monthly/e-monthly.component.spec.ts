import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMonthlyComponent } from './e-monthly.component';

describe('EMonthlyComponent', () => {
  let component: EMonthlyComponent;
  let fixture: ComponentFixture<EMonthlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMonthlyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EMonthlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
