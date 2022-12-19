import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrademarkComponent } from './create-trademark.component';

describe('CreateTrademarkComponent', () => {
  let component: CreateTrademarkComponent;
  let fixture: ComponentFixture<CreateTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrademarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
