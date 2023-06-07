import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVentaSubastaComponent } from './listado-venta-subasta.component';

describe('ListadoVentaSubastaComponent', () => {
  let component: ListadoVentaSubastaComponent;
  let fixture: ComponentFixture<ListadoVentaSubastaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVentaSubastaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVentaSubastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
