import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotNetCoreWebApiComponent } from './dot-net-core-web-api.component';

describe('DotNetCoreWebApiComponent', () => {
  let component: DotNetCoreWebApiComponent;
  let fixture: ComponentFixture<DotNetCoreWebApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DotNetCoreWebApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DotNetCoreWebApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
