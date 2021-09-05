import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotionsOfArchitectureComponent } from './notions-of-architecture.component';

describe('NotionsOfArchitectureComponent', () => {
  let component: NotionsOfArchitectureComponent;
  let fixture: ComponentFixture<NotionsOfArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotionsOfArchitectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotionsOfArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
