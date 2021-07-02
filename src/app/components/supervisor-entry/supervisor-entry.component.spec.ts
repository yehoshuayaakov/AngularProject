import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorEntryComponent } from './supervisor-entry.component';

describe('SupervisorEntryComponent', () => {
  let component: SupervisorEntryComponent;
  let fixture: ComponentFixture<SupervisorEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
