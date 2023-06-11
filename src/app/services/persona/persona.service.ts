import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  post = (persona: any) => {
    return this.http.post(environment.backend + "/persona", persona, { responseType: 'json' })
  }
}
