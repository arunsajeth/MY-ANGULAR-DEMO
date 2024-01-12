import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipedemosComponent } from './pipedemos.component';

describe('PipedemosComponent', () => {
  let component: PipedemosComponent;
  let fixture: ComponentFixture<PipedemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipedemosComponent]
    });
    fixture = TestBed.createComponent(PipedemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
