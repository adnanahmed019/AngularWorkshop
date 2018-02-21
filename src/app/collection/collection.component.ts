import { Component, OnInit } from '@angular/core';

import {Ibook} from '../ibook';

import {MatSnackBar} from '@angular/material'
import { DataService } from '../services/data.service';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css'],
  providers: [DataService]
})
export class CollectionComponent implements OnInit {
  pageTitle: string;
  books: Array<Ibook>;
  showOperatingHours : boolean = false; 
  openingTime: Date;
  closingTime : Date;

  constructor(private _snackBar: MatSnackBar, private _dataService: DataService) {
    this.openingTime = new Date();
    this.openingTime.setHours(10,0);
    this.closingTime = new Date();
    this.closingTime.setHours(15,0);
  }

  ngOnInit() {
    this.books = this._dataService.getBooks();
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
