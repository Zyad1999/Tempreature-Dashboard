import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendUpdateComponent } from './send-update.component';

describe('SendUpdateComponent', () => {
  let component: SendUpdateComponent;
  let fixture: ComponentFixture<SendUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendUpdateComponent]
    });
    fixture = TestBed.createComponent(SendUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
