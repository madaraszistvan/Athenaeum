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
  private isbn: number;
  private title:string;
  private author:string;
  private editable:boolean;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    // this.route is an Observable
    this.route.params.forEach(
      (params: Params) => {
        let isbn = params['id'];
        this.editable = params['editable'];

        this.bookService.getBook(isbn)
          .subscribe(data => {
            this.isbn = data.isbn;
            this.title = data.title;
            this.author = data.author
          })

      }
    )
  }

}
