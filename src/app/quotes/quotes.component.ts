import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() {}

  ngOnInit() {}
}
