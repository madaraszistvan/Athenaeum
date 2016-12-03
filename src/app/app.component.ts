import { Component, OnInit } from '@angular/core';
import { Book } from './book/book';
import { BookService } from './book/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  title = 'Athenaeum';
  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(){
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data
      })
  }
}
