import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
quote = 'The future is but the obsolete in reverese'
  constructor() { }

  ngOnInit() {
  }

}
