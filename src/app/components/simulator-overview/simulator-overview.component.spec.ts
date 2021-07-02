import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatorOverviewComponent } from './simulator-overview.component';

describe('SimulatorOverviewComponent', () => {
  let component: SimulatorOverviewComponent;
  let fixture: ComponentFixture<SimulatorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimulatorOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
