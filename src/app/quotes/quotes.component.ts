import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes = [
    new Quotes("Gus", "William Shakespeare", "the future is but the obsolete in reverse", "an inspiring quote on the malleability of time", new Date(2018, 3, 14),0,0),
    new Quotes("Gus", "William Shakespeare", "the future is but the obsolete in reverse", "an inspiring quote on the malleability of time", new Date(2018, 3, 14),0,0),
    new Quotes("Gus", "Charles de Gaulle", "the beauty is in the walking we're betrayed by destinations", "an inspiring quote on the malleability of time", new Date(2018, 3, 14),0,0),
    new Quotes("Gus", "Shirley Britt", "we don't know the fututre but the end is always near", "an inspiring quote on the malleability of time", new Date(2018, 3, 14),0,0),
  ];
  addNewQuotes(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
  
    this.quotes.push(quote);
  }
  toogleDetails(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  // thumbsUp(upVote, index) {
  //   if (upVote) {
  //     this.quotes[index].upVote += 1;
  //   }
  // } thumbsDown(downVote, index) {
  //   if (downVote) {
  //     this.quotes[index].downVote -= 1;
  //   }
  // }

  deleteQuotes(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        'Are you sure you want to delete ${this.quotes[index].name}'
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit() {}
}
