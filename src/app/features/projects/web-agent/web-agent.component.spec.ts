import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebAgentComponent } from './web-agent.component';

describe('WebAgentComponent', () => {
  let component: WebAgentComponent;
  let fixture: ComponentFixture<WebAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebAgentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
