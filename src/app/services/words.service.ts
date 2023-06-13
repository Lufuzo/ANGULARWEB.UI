import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Word } from 'src/models/word.model';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }
  
  getAllWords(): Observable<Word[]>
  {
  
    return this.http.get<Word[]>(this.baseApiUrl + '/api/words');
  }
  addNewWord(addWordRequest: Word): Observable<Word>
  {
    return this.http.post<Word>(this.baseApiUrl + '/api/words', addWordRequest);
  }
  getWords(id: number): Observable<Word>
  {
    return this.http.get<Word>(this.baseApiUrl + '/api/words/'+ id);
  }
  updateWord(id: number, updateWordRequest: Word): Observable<Word>
  {
   return this.http.put<Word>(this.baseApiUrl + '/api/words/'+ id, updateWordRequest);
  }

  deleteWord(id: number): Observable<Word>
  {
   return this.http.delete<Word>(this.baseApiUrl + '/api/words/'+ id);
  }

}
