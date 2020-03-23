import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IQuestionData } from './IQuestion';
import { Observable } from 'rxjs';
import { Answer } from './IAnswer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class QuestionserviceService {

  constructor(
    protected httpClient: HttpClient,
    ) {
}
  saveQuestion(question: IQuestionData): Observable<any> {
    return this.httpClient.post('http://localhost:8080/question', question).pipe();
  }

  saveAnswer(answer: Answer): Observable<any> {
    return this.httpClient.post('http://localhost:8080/answer', answer).pipe();
  }
}
