import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {BookService} from '../book/book.service';
import {Book} from '../book/book';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: [
    'book-detail.component.scss',
    '../book/book.component.scss'
  ]
})
export class BookDetailComponent implements OnInit {

  private isbn: number;
  @Input() title: string;
  @Input() author: string;
  @Input() editable: boolean;
  private newBook: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private bookService: BookService) {
  }

  ngOnInit() {
    // this.route is an Observable
    this.route.params.forEach(
      (params: Params) => {
        let isbn = params['id'];
        this.editable = params['editable'];

        // if new book added
        if (isbn == 0) {
          this.newBook = true;
        } else {
          this.newBook = false;
          let book: Book = this.bookService.getBook(isbn);
          this.isbn = book.isbn;
          this.title = book.title;
          this.author = book.author
        }
      }
    )
  }

  save() {
    let book: Book;
    if (this.newBook) {
      book = new Book();
      book.isbn = this.isbn
    } else {
      book = this.bookService.getBook(this.isbn)
    }

    book.title = this.title;
    book.author = this.author;

    this.newBook && this.bookService.addBook(book);

    this.router.navigate(['/books'])
  }

}
