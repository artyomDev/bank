import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoanStepsComponent } from './loan-steps.component';

describe('LoanStepsComponent', () => {
  let component: LoanStepsComponent;
  let fixture: ComponentFixture<LoanStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
