import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona/persona.service';
import { Router } from '@angular/router';


class Persona {
  iidPer: string = null;
  cnom: string = null;
  cprimerApellido: string = null;
  csegundoApellido: string = null;
  cemail: string = null;
  itelefono: string = null;
  crut: string = null;
  cpass: string = null;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  persona = new Persona();
  cnom = null

  constructor(private personaService: PersonaService,
    private route: Router) { }

  ngOnInit() {
  }

  crearUsuario() {
    let nuevoId = null
    this.personaService.getLastId().subscribe({
      next:(res: number) => {
        if(res) {
          nuevoId = res + 1
          this.persona.iidPer = nuevoId
          this.personaService.post(this.persona).subscribe({
            next: (res) => {
              if(res) this.route.navigate(["/bienvenida"])
              else alert("error al crear usuario")
            }
          })
        } else alert("error al crear usuario")
      }
    })
  }

}
