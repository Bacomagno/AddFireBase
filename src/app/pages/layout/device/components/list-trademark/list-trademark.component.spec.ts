import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTrademarkComponent } from './list-trademark.component';

describe('ListTrademarkComponent', () => {
  let component: ListTrademarkComponent;
  let fixture: ComponentFixture<ListTrademarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTrademarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTrademarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
