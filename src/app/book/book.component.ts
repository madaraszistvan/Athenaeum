import { Component, OnInit, Input } from '@angular/core';
import {BookService} from '../book/book.service';
import {Book} from '../book/book';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  delete(book:Book) {
    const result = confirm(`Do you want to delete the "${book.title}" book?`);

    if (result) {
      this.bookService.deleteBook(book)
    }
  }

}
