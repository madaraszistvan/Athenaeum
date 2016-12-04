import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../book/book.service';
import { Book } from '../book/book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [
    'book-detail.component.scss',
    '../book/book.component.scss'
  ]
})
export class BookDetailComponent implements OnInit {

  private book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    // this.route is an Observable
    this.route.params.forEach(
      (params: Params) => {
        let isbn = params['id'];

        this.bookService.getBook(isbn)
          .subscribe(data => this.book = data)

      }
    )
  }

}
