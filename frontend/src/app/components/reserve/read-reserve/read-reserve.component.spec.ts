import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadReserveComponent } from './read-reserve.component';

describe('ReadReserveComponent', () => {
  let component: ReadReserveComponent;
  let fixture: ComponentFixture<ReadReserveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadReserveComponent]
    });
    fixture = TestBed.createComponent(ReadReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
