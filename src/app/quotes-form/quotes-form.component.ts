import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes("", "", "", "");
  @Output() addQuote = new EventEmmiter<Quotes>();
    
    submitQuote(){
  this.addQuote.emit(this.newQuote)
    }
  constructor() { }

  ngOnInit() {
  }

}
