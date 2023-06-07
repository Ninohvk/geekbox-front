import { TestBed } from '@angular/core/testing';

import { ProductoOfertaService } from './producto-oferta.service';

describe('ProductoOfertaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductoOfertaService = TestBed.get(ProductoOfertaService);
    expect(service).toBeTruthy();
  });
});
