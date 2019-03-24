import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Quotes"
  quotes = [
    new Quotes("Gus","the future is but the obsolete in reverse","an inspiring quote on the malleability of time"),
    new Quotes("Gus", "the beauty is in the walking we're betrayed by destinations","an inspiring quote on the malleability of time"),
    new Quotes("Gus", "we don't know the fututre but the end is always near","an inspiring quote on the malleability of time"),
    ]   
    }
   
