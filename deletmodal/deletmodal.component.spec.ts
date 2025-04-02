import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletmodalComponent } from './deletmodal.component';

describe('DeletmodalComponent', () => {
  let component: DeletmodalComponent;
  let fixture: ComponentFixture<DeletmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletmodalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
