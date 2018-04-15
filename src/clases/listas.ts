import {ListaItem} from './lista-item'

export  class Listas {

  nombre: string;
  complete: boolean;
  items: ListaItem[];

  constructor(nombre: string){

    this.nombre = nombre;
    this.complete = false;
  }

}
