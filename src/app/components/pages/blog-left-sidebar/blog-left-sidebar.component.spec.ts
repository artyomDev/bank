import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogLeftSidebarComponent } from './blog-left-sidebar.component';

describe('BlogLeftSidebarComponent', () => {
  let component: BlogLeftSidebarComponent;
  let fixture: ComponentFixture<BlogLeftSidebarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
