import {Component, OnInit} from '@angular/core';
import {ListaDeseosServices} from '../../services/lista-deseos.services';

@Component({
  selector:'app-pendientes',
  templateUrl: 'pendiente.component.html',
})
export class PendientesComponent implements  OnInit{
    constructor(private  litaDeseosService: ListaDeseosServices){

    }


  ngOnInit(): void {
  }


}
