import { Injectable } from '@angular/core';
import {Ibook} from '../ibook'

@Injectable()
export class DataService {

  constructor() { }

  getBooks(): Array<Ibook> {
    return [
      {
        id:1,
        title : "Javascript - The Good Parts",
        author : "Douglas Crockford",
        isCheckedOut : true,
        rating : 3
      },
      {
        id: 2,
        title : "The Wind in the Willows",
        author : "Kenneth Grahame",
        isCheckedOut : false,
        rating : 4
      },
      {
        id: 3,
        title : "Pillars of the Earth",
        author : "Ken Follet",
        isCheckedOut : true,
        rating : 5
      },
      {
        id: 4,
        title : "Harry Potter and the prisoner of Azkaban",
        author : "J.K. Rowling",
        isCheckedOut : false,
        rating : 5
      }
    ];
  }

}
