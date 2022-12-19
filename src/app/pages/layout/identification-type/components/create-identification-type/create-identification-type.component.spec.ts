import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIdentificationTypeComponent } from './create-identification-type.component';

describe('CreateIdentificationTypeComponent', () => {
  let component: CreateIdentificationTypeComponent;
  let fixture: ComponentFixture<CreateIdentificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateIdentificationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateIdentificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
