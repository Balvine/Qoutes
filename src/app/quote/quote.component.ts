import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote[]= [
    new Quote(1, 'Do what you can, with what you have, where you are', 'Theodore Roosevelt', new Date(2019, 5, 14)),
    new Quote(2, 'If you cannot do great things, do small things in a great way', 'Napoleon Hill', new Date(2020, 5, 14)),
    new Quote(3, 'It is never too late to be what you might have been', 'George Eliot', new Date(2019, 1, 4))
  ];



  addNewQuote(quote) {
    let quoteLength = this.quote.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  toggleDetail(index) {
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete) {
        this.quote.splice(index, 1)
      }
    }
  }



  ngOnInit() {
  }


}