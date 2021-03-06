import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {
  newQuotes = new Quotes('', '','','',new Date(),0,0);
  @Output() addQuotes = new EventEmitter<Quotes>();
  submitQuotes() {
    this.addQuotes.emit(this.newQuotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
