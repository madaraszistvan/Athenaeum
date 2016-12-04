import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Book } from './book';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class BookService {

  private observable: Observable<any>;
  private data: Book[];

  constructor(private http: Http) { }

  getBooks() {
    if(this.data) {
      // if `data` is available just return it as `Observable`
      return Observable.of(this.data);
    } else if(this.observable) {
      // if `this.observable` is set then the request is in progress
      // return the `Observable` for the ongoing request
      return this.observable;
    } else {
      // create the request, store the `Observable` for subsequent subscribers
      this.observable = this.http.get('app/books.json')
        .map(response =>  {
          // when the cached data is available we don't need the `Observable` reference anymore
          this.observable = null;

          if(response.status == 400) {
            return "FAILURE";
          } else if(response.status == 200) {
            this.data = <Book[]>response.json().data;
            return this.data;
          }
          // make it shared so more than one subscriber can get the result
        })
        .share();
      return this.observable;
    }
  }

  // todo if getBook is called before getBooks
  getBook(isbn: number) {
    return this.data.filter((item: Book) => item.isbn == isbn)[0]
  }
}
