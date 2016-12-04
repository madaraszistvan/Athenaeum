import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from './book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getBooks() {
    return this.http.get('app/books.json')
      .map(response => <Book[]>response.json().data);
  }

  getBook(isbn: number) {
    return this.http.get('app/books.json')
      .map(response => {
        return <Book>response.json().data
          .filter((item: Book) => item.isbn == isbn)[0]
      })
  }
}
