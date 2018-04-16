import {Component, OnInit} from '@angular/core';
import {ListaDeseosServices} from '../../services/lista-deseos.services';
import {NavController} from 'ionic-angular';
import {AgregarComponet} from '../agregar/agregar.componet'
@Component({
  selector:'app-pendientes',
  templateUrl: 'pendiente.component.html',
})
export class PendientesComponent implements  OnInit{
    constructor(private  litaDeseosService: ListaDeseosServices,
                private navController: NavController){

    }


  ngOnInit(): void {
  }

  private agregar(){
    this.navController.push(AgregarComponet);
  }


}
