import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsService } from 'src/app/services/words.service';
import { Word } from 'src/models/word.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-word',
  templateUrl: './edit-word.component.html',
  styleUrls: ['./edit-word.component.css']
})
export class EditWordComponent implements OnInit{

  wordDetails: Word = {
    id : 0,
    value: ''
   
  };

  constructor(private route: ActivatedRoute, private wordService: WordsService,private router: Router){}

  ngOnInit(): void
  {
    this.route.paramMap.subscribe({
      next: (params) =>{
       const id =  params.get('id');
   // let id =  +params.get('id');

       if(id)
       {
          var _id = Number(id);
        this.wordService.getWords(_id)
        .subscribe({
          next:(response)=>{
            this.wordDetails = response;
          }
        })
       }
      }
    })
  }
  updateWord()
  {
    this.wordService.updateWord(this.wordDetails.id!, this.wordDetails)
    .subscribe({
      next: (response) =>{
        this.router.navigate(['words']);
      }
    })
  }
  deleteWord(id: number)
  {
  this.wordService.deleteWord(id)
  .subscribe({
     next:(response: any)=>{
      this.router.navigate(['words']);

    }
  })

  }

}