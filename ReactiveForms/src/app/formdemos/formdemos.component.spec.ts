import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdemosComponent } from './formdemos.component';

describe('FormdemosComponent', () => {
  let component: FormdemosComponent;
  let fixture: ComponentFixture<FormdemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormdemosComponent]
    });
    fixture = TestBed.createComponent(FormdemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
