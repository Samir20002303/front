import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDepComponent } from './form-dep.component';

describe('FormDepComponent', () => {
  let component: FormDepComponent;
  let fixture: ComponentFixture<FormDepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
