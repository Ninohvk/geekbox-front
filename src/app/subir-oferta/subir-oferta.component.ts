import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subir-oferta',
  templateUrl: './subir-oferta.component.html',
  styleUrls: ['./subir-oferta.component.css']
})
export class SubirOfertaComponent implements OnInit {

  oferta = {
    cnomProdOfer: null,
    dprecioProdOfer: null,
    icantOfer: null,
    cdescProdOfer: null,
  }

  constructor() { }

  ngOnInit() {
  }

}
