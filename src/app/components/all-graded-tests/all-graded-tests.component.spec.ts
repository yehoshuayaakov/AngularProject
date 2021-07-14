import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGradedTestsComponent } from './all-graded-tests.component';

describe('AllGradedTestsComponent', () => {
  let component: AllGradedTestsComponent;
  let fixture: ComponentFixture<AllGradedTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGradedTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGradedTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
