import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReserveComponent } from './delete-reserve.component';

describe('DeleteReserveComponent', () => {
  let component: DeleteReserveComponent;
  let fixture: ComponentFixture<DeleteReserveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteReserveComponent]
    });
    fixture = TestBed.createComponent(DeleteReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
