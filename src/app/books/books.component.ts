import { Component, OnInit } from '@angular/core';
import { Book } from '../book/book';
import { BookService } from '../book/book.service';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(){
    this.bookService.getBooks()
      .subscribe(data => {
        this.books = data
      })
  }

}
