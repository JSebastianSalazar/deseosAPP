import {Component, OnInit} from '@angular/core';
import {} from '../../clases/index';
@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})

export class AgregarComponet implements  OnInit{
  nombreLista: string;
  nombreItem: string = '';
  constructor(){

  }
  ngOnInit(): void {
  }

public agregar(){
    if(this.nombreItem.length === 0){
      return;
    }


}

}
