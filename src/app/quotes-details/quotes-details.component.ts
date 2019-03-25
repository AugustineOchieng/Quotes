import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuotesDetailsComponent implements OnInit {
  // quotes = [
  //   new Quotes("Gus", "William Shakespeare", "the future is but the obsolete in reverse", "an inspiring quote on the malleability of time"),
  //   new Quotes("Gus", "Charles de Gaulle", "the beauty is in the walking we're betrayed by destinations", "an inspiring quote on the malleability of time"),
  //   new Quotes("Gus", "Shirley Britt", "we don't know the fututre but the end is always near", "an inspiring quote on the malleability of time"),
  // ]   


  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  @Output() upVote = new EventEmitter<boolean>();
  @Output() downVote = new EventEmitter<boolean>();


  thumbsUp(voting: boolean) {
    this.upVote.emit(voting);
  }
  thumbsDown(voting1: boolean) {
    this.downVote.emit(voting1);
  }

  constructor() { }

  ngOnInit() {
  }   

}
