import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativityComponent } from './creativity.component';

describe('CreativityComponent', () => {
  let component: CreativityComponent;
  let fixture: ComponentFixture<CreativityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreativityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
