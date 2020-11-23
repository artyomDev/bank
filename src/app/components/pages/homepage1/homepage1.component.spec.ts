import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Homepage1Component } from './homepage1.component';

describe('Homepage1Component', () => {
  let component: Homepage1Component;
  let fixture: ComponentFixture<Homepage1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
