import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatListModule, MatCardModule, MatSlideToggleModule, MatDialogModule, MatIconModule, MatInputModule, 
MatSnackBarModule, MatTabsModule, MatButtonModule, MatLineModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DynamicearthComponent } from './dynamicearth/dynamicearth.component';
import { CollectionComponent } from './collection/collection.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DynamicearthComponent,
    CollectionComponent
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
