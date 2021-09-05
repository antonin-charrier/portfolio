import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAssessmentsComponent } from './financial-assessments.component';

describe('FinancialAssessmentsComponent', () => {
  let component: FinancialAssessmentsComponent;
  let fixture: ComponentFixture<FinancialAssessmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialAssessmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
