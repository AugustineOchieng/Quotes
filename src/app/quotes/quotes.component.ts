import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
