import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Quotes"
  quotes = [
    new Quotes("Gus","William Shakespeare","the future is but the obsolete in reverse","an inspiring quote on the malleability of time"),
    new Quotes("Gus","Charles de Gaulle","the beauty is in the walking we're betrayed by destinations","an inspiring quote on the malleability of time"),
    new Quotes("Gus","Shirley Britt","we don't know the fututre but the end is always near","an inspiring quote on the malleability of time"),
  ]  
  // toogleDetails(index) {
  //   this.quotes[index].showDetails = !this.quotes[index].showDetails;
  // }
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
    }
   
