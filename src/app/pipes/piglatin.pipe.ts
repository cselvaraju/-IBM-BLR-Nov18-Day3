import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) return '';
    let words = value.split(' ');
    for(let i = 0; i < words.length; ++i) {
      if (words[i].length > 0)
        words[i] = words[i].slice(1) + words[i][0] + 'a';
    }
    return words.join(' ');
  }

}
