import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sample'
})
export class SamplePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
