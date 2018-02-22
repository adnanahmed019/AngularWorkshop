import { Component, OnInit } from "@angular/core";

import { Ibook } from "../ibook";

import { MatSnackBar } from "@angular/material";
import { DataService } from "../services/data.service";
import { Subject } from "rxjs/Subject";

@Component({
  selector: "my-collection",
  templateUrl: "./collection.component.html",
  styleUrls: ["./collection.component.css"],
  providers: [DataService]
})
export class CollectionComponent implements OnInit {
  pageTitle: string;
  books: Array<Ibook>;
  showOperatingHours: boolean = false;
  openingTime: Date;
  closingTime: Date;
  searchTerm$ = new Subject<string>();

  constructor(
    private _snackBar: MatSnackBar,
    private _dataService: DataService
  ) {
    this.openingTime = new Date();
    this.openingTime.setHours(10, 0);
    this.closingTime = new Date();
    this.closingTime.setHours(15, 0);
  }

  ngOnInit() {
    //this.books = this._dataService.getBooks();
    this.getBooks();
    this._dataService.search(this.searchTerm$).subscribe(books => {
      this.books = books;
    });
  }

  updateMessage(message: string, rating: number, type: string): void {
    if (message) {
      this._snackBar.open(`${type} ${rating} : ${message}`, "DISMISS", {
        duration: 3000
      });
    }
  }

  onRatingUpdate(book: Ibook): void {
    this.updateMessage(book.title, book.rating, "Rating has been updated to ");
  }

  getBooks(): void {
    this._dataService
      .getBooks()
      .subscribe(
        books => (this.books = books),
        error => this.updateMessage(<any>error, 5, "ERROR")
      );
  }
}
