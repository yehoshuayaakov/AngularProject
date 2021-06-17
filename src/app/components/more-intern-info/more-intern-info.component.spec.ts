import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInternInfoComponent } from './more-intern-info.component';

describe('MoreInternInfoComponent', () => {
  let component: MoreInternInfoComponent;
  let fixture: ComponentFixture<MoreInternInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInternInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInternInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
