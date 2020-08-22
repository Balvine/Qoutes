import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote:Quote[];
  toggleDetail(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quote[index].name}?`)

      if (toDelete){
        this.quote.splice(index,1)
      }
    }
  }

  constructor(){
    this.quote=[
      new Quote(1,'Life is drama play your part.','Ongati kebaso',new Date(2019,5,14)),
      new Quote(2,'The problem with Africa is that people with ideas have no powers and people with powers have no ideas',' PLO Lumumba',new Date(2019,1,14)),
      new Quote(3,'There is no hygiene in African plitics','Plo Lumumba',new Date(2019,3,14)),
      
    ];
    
  } 
  addNewQuote(quote){
    let quoteLength = this.quote.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quote.push(quote)
  }

  ngOnInit() {
  }


}