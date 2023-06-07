import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoVentaNormalComponent } from './listado-venta-normal.component';

describe('ListadoVentaNormalComponent', () => {
  let component: ListadoVentaNormalComponent;
  let fixture: ComponentFixture<ListadoVentaNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoVentaNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoVentaNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
