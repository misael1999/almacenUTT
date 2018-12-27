import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubstrPipe implements PipeTransform {

  transform(value: string, numero: number): string {

    const valor = value.substr(0, numero);
    return (value.length > numero ) ? valor  + '.....' : valor;
  }

}
