import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  qoutes: Quote[] = [
    new Quote(1, 'Do what you can, with what you have, where you are', 'Theodore Roosevelt'),
    new Quote(2,'If you cannot do great things, do small things in a great way','Napoleon Hill'),
    new Quote(3,'It is never too late to be what you might have been','George Eliot')
  ];
  

  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }


  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
