import { Component, OnInit } from '@angular/core';
import { Word } from 'src/models/word.model';
import { WordsService } from 'src/app/services/words.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit{
  

  addWordRequest: Word = {
    id: 0,
    value: ''
  };

  constructor(private wordService: WordsService, private router: Router){}
  ngOnInit(): void {
    
  }

  addNewWord()
 {
  this.wordService.addNewWord(this.addWordRequest)
  .subscribe({

      next: (word) => {
       this.router.navigate(['words']);
      }
  })
  
}
}
