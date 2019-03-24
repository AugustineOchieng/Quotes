import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent implements OnInit {
  quotes = [
    new Quotes("Gus","Will","The future is but the obsolete in reverse"),
    new Quotes("Gus","Will","The future is but the obsolete in reverse"),
    new Quotes("Gus","Will","The future is but the obsolete in reverse")
  ]   

  constructor() { }

  ngOnInit() {
  }   

}
  