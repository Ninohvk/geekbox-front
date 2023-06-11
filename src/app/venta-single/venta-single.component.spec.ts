import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaSingleComponent } from './venta-single.component';

describe('VentaSingleComponent', () => {
  let component: VentaSingleComponent;
  let fixture: ComponentFixture<VentaSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VentaSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VentaSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
