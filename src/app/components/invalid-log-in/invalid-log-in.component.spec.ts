import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidLogInComponent } from './invalid-log-in.component';

describe('InvalidLogInComponent', () => {
  let component: InvalidLogInComponent;
  let fixture: ComponentFixture<InvalidLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
