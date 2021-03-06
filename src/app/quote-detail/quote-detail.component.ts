import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote'
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isComplete:EventEmitter <boolean> = new EventEmitter();
  @Output() upVote:EventEmitter <Quote> = new EventEmitter();
  @Output() downVote:EventEmitter <Quote> = new EventEmitter();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  
  // numberofdislikes : number=0

 likebuttonclick(quote){
 this.upVote.emit(quote);
 
}
  dislikebuttonclick(quote){
  this.downVote.emit(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
