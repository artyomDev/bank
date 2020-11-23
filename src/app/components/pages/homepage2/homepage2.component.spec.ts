import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Homepage2Component } from './homepage2.component';

describe('Homepage2Component', () => {
  let component: Homepage2Component;
  let fixture: ComponentFixture<Homepage2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Homepage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homepage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
