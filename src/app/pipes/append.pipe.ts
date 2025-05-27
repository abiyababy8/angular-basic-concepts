import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'append'
})
export class AppendPipe implements PipeTransform {

  transform(title: string, ...appendText: string[]): string {
    //1st argument : what we need to format
    //2nd argument : option value that we send from html
    return title + " " + appendText;
  }

}
