import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  quote: any =
    {
      name: "Gus",
      author: "Will",
      quote: "The future is but the obsolete in reverse"
      
    };
}
