import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoCompraComponent } from './exito-compra.component';

describe('ExitoCompraComponent', () => {
  let component: ExitoCompraComponent;
  let fixture: ComponentFixture<ExitoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
