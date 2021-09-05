import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanSkillsComponent } from './human-skills.component';

describe('HumanSkillsComponent', () => {
  let component: HumanSkillsComponent;
  let fixture: ComponentFixture<HumanSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
