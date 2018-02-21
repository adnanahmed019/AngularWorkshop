import { Component, OnInit } from '@angular/core';

import {Ibook} from '../ibook';

import {MatSnackBar} from '@angular/material'

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  pageTitle: string;
  books: Array<Ibook> = [
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
  showOperatingHours : boolean = false; 
  openingTime:Date;
  closingTime : Date;

  constructor(private _snackBar: MatSnackBar) {
    this.openingTime = new Date();
    this.openingTime.setHours(10,0);
    this.closingTime = new Date();
    this.closingTime.setHours(15,0);
  }

  ngOnInit() {
  }

  updateMessage(message: string, rating : number,  type: string) : void{
    if(message)
    {
      this._snackBar.open(`${type} ${rating} : ${message}`, 'DISMISS', {
        duration:3000
      });
    }
  }

  onRatingUpdate(book: Ibook): void {
    this.updateMessage(book.title, book.rating, "Rating has been updated to ");
    }

}
