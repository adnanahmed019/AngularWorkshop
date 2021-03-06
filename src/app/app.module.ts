import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule, MatIconModule, MatInputModule, 
MatSnackBarModule, MatTabsModule, MatButtonModule, MatLineModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DynamicearthComponent } from './dynamicearth/dynamicearth.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { TabsComponent } from './tabs/tabs.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component'


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DynamicearthComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent
],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule, 
    MatSnackBarModule,
    MatTabsModule,
    MatButtonModule,
    MatLineModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
