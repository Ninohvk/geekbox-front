import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona/persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona = {
    cnom: null,
    cprimerApellido: null,
    csegundoApellido: null,
    cemail: null,
    itelefono: null,
    crut: null,
    cpass: null,
  }

  constructor(private personaService: PersonaService,
    private route: Router) { }

  ngOnInit() {
  }

  crearUsuario() {
    this.personaService.post(this.persona).subscribe({
      next: (res) => {
        if(res) this.route.navigate(["/bienvenida"])
        else alert("error al crear usuario")
      }
    })
  }

}
