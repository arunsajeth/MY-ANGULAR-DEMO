import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtondemoComponent } from './buttondemo.component';

describe('ButtondemoComponent', () => {
  let component: ButtondemoComponent;
  let fixture: ComponentFixture<ButtondemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtondemoComponent]
    });
    fixture = TestBed.createComponent(ButtondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
