import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsWelcomeComponent } from './supervisors-welcome.component';

describe('SupervisorsWelcomeComponent', () => {
  let component: SupervisorsWelcomeComponent;
  let fixture: ComponentFixture<SupervisorsWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorsWelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
