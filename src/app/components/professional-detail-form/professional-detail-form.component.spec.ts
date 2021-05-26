import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDetailFormComponent } from './professional-detail-form.component';

describe('ProfessionalDetailFormComponent', () => {
  let component: ProfessionalDetailFormComponent;
  let fixture: ComponentFixture<ProfessionalDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
