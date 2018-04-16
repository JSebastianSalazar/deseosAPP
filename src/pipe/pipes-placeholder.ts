import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export  class PipesPlaceholder implements  PipeTransform{
  transform(value: string, defecto: string): any {

    return ((value)? value: defecto);

  }


}
