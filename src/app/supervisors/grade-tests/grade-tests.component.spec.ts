import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeTestsComponent } from './grade-tests.component';

describe('GradeTestsComponent', () => {
  let component: GradeTestsComponent;
  let fixture: ComponentFixture<GradeTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
