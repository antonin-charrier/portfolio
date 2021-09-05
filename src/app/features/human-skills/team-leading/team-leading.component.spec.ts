import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLeadingComponent } from './team-leading.component';

describe('TeamLeadingComponent', () => {
  let component: TeamLeadingComponent;
  let fixture: ComponentFixture<TeamLeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
