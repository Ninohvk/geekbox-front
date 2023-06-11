import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoPublicacionComponent } from './exito-publicacion.component';

describe('ExitoPublicacionComponent', () => {
  let component: ExitoPublicacionComponent;
  let fixture: ComponentFixture<ExitoPublicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitoPublicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitoPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
