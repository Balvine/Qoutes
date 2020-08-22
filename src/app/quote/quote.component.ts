import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Do what you can, with what you have, where you are', 'Theodore Roosevelt'),
    new Quote(2,'If you cannot do great things, do small things in a great way','Napoleon Hill'),
    new Quote(3,'It is never too late to be what you might have been','George Eliot')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
