import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoOfertaService {

  constructor(private http: HttpClient) { }

  post = (productoOferta) => {
    return this.http.post(environment.backend + "/producto-oferta", productoOferta, { responseType: 'json' })
  }

  get = () => {
    return this.http.get(environment.backend + "/producto-oferta", { responseType: 'json' })
  }

  getById = (id: number) => {
    return this.http.get(environment.backend + "/producto-oferta/" + id, { responseType: 'json' })
  }
}
