import { UsuarioService } from './../services/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ProductoOfertaService } from '../services/producto-oferta/producto-oferta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-oferta',
  templateUrl: './subir-oferta.component.html',
  styleUrls: ['./subir-oferta.component.css']
})
export class SubirOfertaComponent implements OnInit {

  oferta = {
    iidProdOfer: null,
    cnomProdOfer: null,
    dprecioProdOfer: null,
    icantOfer: null,
    cdescProdOfer: null,
    persona_IIdPer: null,
  }

  constructor(private productoOfertaService: ProductoOfertaService,
    private usuarioService: UsuarioService,
    private route: Router) { }

  ngOnInit() {
  }

  crearProductoOferta() {
    let nuevoId = null
    this.productoOfertaService.getLastId().subscribe({
      next:(res: number) => {
        if(res) {
          nuevoId = res + 1
          this.oferta.iidProdOfer = nuevoId
          this.oferta.persona_IIdPer = this.usuarioService.usuario["iidPer"]
          this.productoOfertaService.post(this.oferta).subscribe({
            next: (res) => {
              if(res) this.route.navigate(["/exito-publicacion"])
              else alert("error al crear oferta")
            }
          })
        } else alert("error al crear oferta")
      }
    })
  }

}
