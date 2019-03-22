import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
