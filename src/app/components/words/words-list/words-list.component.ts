import { Component, OnInit } from '@angular/core';
import { WordsService } from 'src/app/services/words.service';
import { Word } from 'src/models/word.model';

@Component({
  selector: 'app-words-list',
  templateUrl: './words-list.component.html',
  styleUrls: ['./words-list.component.css']
})
export class WordsListComponent implements OnInit {

  words : Word[] = [];
  constructor (private wordService: WordsService){
  }
  ngOnInit(): void {

    this.wordService.getAllWords()
    .subscribe({
      next: (words) => {
       this.words = words;
      },
     error: (response: string[])  => {
      console.log(response);
     }
    })

  }


}
