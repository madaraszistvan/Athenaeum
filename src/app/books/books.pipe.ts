import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bookFilter'
})

export class BookFilterPipe implements PipeTransform {

  transform(value: any, args: string): any {
    let filter = args ? args.toLowerCase() : undefined;
    return filter
      ? value.filter(book => (book.title.toLowerCase().indexOf(filter) !== -1 || book.author.toLowerCase().indexOf(filter) !== -1))
      : value;
  }
}
