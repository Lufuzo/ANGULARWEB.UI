import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordsListComponent } from './components/words/words-list/words-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddWordComponent } from './components/words/add-word/add-word.component';
import { FormsModule } from '@angular/forms';
import { EditWordComponent } from './components/words/edit-word/edit-word.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsListComponent,
    AddWordComponent,
    EditWordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
