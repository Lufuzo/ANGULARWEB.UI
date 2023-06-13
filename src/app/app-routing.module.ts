import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsListComponent } from './components/words/words-list/words-list.component';  
import { AddWordComponent } from './components/words/add-word/add-word.component';
import { EditWordComponent } from './components/words/edit-word/edit-word.component';

const routes: Routes = [
  {

    path: '',
    component : WordsListComponent
  },
  {

    path: 'words',
    component : WordsListComponent
  },
  {

    path: 'words/add',
    component : AddWordComponent
  },
  {

    path: 'words/edit/:id',
    component : EditWordComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
