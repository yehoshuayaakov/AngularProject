import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartquestionareComponent } from './startquestionare.component';

describe('StartquestionareComponent', () => {
  let component: StartquestionareComponent;
  let fixture: ComponentFixture<StartquestionareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartquestionareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartquestionareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
