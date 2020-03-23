import { Component, OnInit } from '@angular/core';
import { IQuestionData } from '../IQuestion';
import { QuestionserviceService } from '../questionservice.service';
import { Answer } from '../IAnswer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  question: IQuestionData;
  index = 1;
  indexList: any[];
  questions = new Map();
  answerArray = new Array<Answer>();
  constructor(private questionService: QuestionserviceService) { }

  ngOnInit(): void {
    this.answerArray.push(new Answer(''));
  }
  updateQuestion($event: IQuestionData, index: number) {
    this.questions.set(index, $event);
  }
  addQuestion() {
    this.questions.set(this.index, new IQuestionData(''));
    this.index++;
    this.indexList = Array.from(this.questions.keys());
  }
  save(questions: any) {
    questions.forEach((row: any) => {
      this.saveQuestion(row);
    });
  }
  saveQuestion(question: IQuestionData, callback?: any) {
    this.questionService.saveQuestion(question).subscribe((response: any) => {
      if (response) {
        question.answers.forEach((answer: Answer) => {
          answer.questionId = response.id;
          if (answer.question) {
            this.saveAnswers(answer, this.saveQuestion.bind(this));
          } else {
            this.saveAnswers(answer);
          }
        });
      }
    });
  }
  saveAnswers(answer: Answer, callback?: any) {
      this.questionService.saveAnswer(answer).subscribe((response: any) => {
        if (response && callback) {
          answer.question.refAnswerId = response.id;
          callback(answer.question);
        }
      });
  }
}
