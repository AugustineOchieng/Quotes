import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes("Gus", "William Shakespeare", "the future is but the obsolete in reverse", "an inspiring quote on the malleability of time"),
    new Quotes("Gus", "Charles de Gaulle", "the beauty is in the walking we're betrayed by destinations", "an inspiring quote on the malleability of time"),
    new Quotes("Gus", "Shirley Britt", "we don't know the fututre but the end is always near", "an inspiring quote on the malleability of time"),
  ]  
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  constructor() {}

  ngOnInit() {}
}
