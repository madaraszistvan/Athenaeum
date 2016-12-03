import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book;

  constructor() { }

  ngOnInit() {
  }

}
