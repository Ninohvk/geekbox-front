import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  post = (persona: any) => {
    return this.http.post(environment.backend + "/persona", persona, { responseType: 'json' })
  }

  getLastId = () => {
    return this.http.get(environment.backend + "/persona/last-id", { responseType: 'json' })
  }
}
