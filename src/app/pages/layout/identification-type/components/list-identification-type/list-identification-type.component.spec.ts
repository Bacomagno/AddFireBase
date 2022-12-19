import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdentificationTypeComponent } from './list-identification-type.component';

describe('ListIdentificationTypeComponent', () => {
  let component: ListIdentificationTypeComponent;
  let fixture: ComponentFixture<ListIdentificationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListIdentificationTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListIdentificationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
