import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoLoginComponent } from './exito-login.component';

describe('ExitoLoginComponent', () => {
  let component: ExitoLoginComponent;
  let fixture: ComponentFixture<ExitoLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitoLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
