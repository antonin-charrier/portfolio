import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaltComponent } from './galt.component';

describe('GaltComponent', () => {
  let component: GaltComponent;
  let fixture: ComponentFixture<GaltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GaltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
