import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternNotFoundComponent } from './intern-not-found.component';

describe('InternNotFoundComponent', () => {
  let component: InternNotFoundComponent;
  let fixture: ComponentFixture<InternNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
