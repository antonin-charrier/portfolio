import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeSharingComponent } from './knowledge-sharing.component';

describe('KnowledgeSharingComponent', () => {
  let component: KnowledgeSharingComponent;
  let fixture: ComponentFixture<KnowledgeSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeSharingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
