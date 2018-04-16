import {Injectable} from '@angular/core';
import {Listas} from '../clases/listas';

@Injectable()
export class ListaDeseosServices {
    listas: Listas[] = [];
  constructor(){
    console.log('servicio inicializado');
    let lista1 = new Listas('celular');
    let lista2 = new Listas('venecas');
    this.listas.push(lista1);
    this.listas.push(lista2);
  }

}
