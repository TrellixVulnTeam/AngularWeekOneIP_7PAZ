import { Injectable } from '@angular/core';
import{ Quote } from '../models/quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  quotes: Quote[] = [ 
    {
      addedby: "Jadiel",
      author: "Vladmir Putin",
      quote: "Sometimes it is necessary to be lonely in order to prove that you are right." 


    },
    {
      addedby: "Sally",
      author: "Joe Biden",
      quote: "Lets go Brandon!" 


    },
    {
      addedby: "Joe",
      author: "Elton john",
      quote: "Hakuna Matata" 


    },
    {
      addedby: "Roba",
      author: "Safaricom-lady",
      quote: "Samahani mteja wa nambari... " 


    }
  ];

  constructor() { }

onGet() {
  return this.quotes
}

}
