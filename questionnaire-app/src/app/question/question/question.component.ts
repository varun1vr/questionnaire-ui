import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IQuestionData } from '../IQuestion';
import { QuestionserviceService } from '../questionservice.service';
import { Answer } from '../IAnswer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions = new Map();
  values: any[];
  questionType: string;
  @Output()
  questionData: EventEmitter<IQuestionData> = new EventEmitter();
  @Input()
  question: IQuestionData;
  @Input()
  index: number;
  indexList: any[];
  constructor(private questionService: QuestionserviceService) { }

  ngOnInit() {
    this.values = [{
      name: 'Multiline text',
      value: 'Multiline text'
    }, {
      name: 'Single choice',
      value: 'Single choice'
    },
    {
      name: 'Multiple choice',
      value: 'Multiple choice'
    }];
    this.questionType = this.values[0].value;
    this.question.questionType = this.values[0].value;
    this.question.answers = new Array<Answer>(1);
    this.question.answers[0] = new Answer('');
  }

  valueChanged($event: string) {
    this.question.questionType = $event;
    this.questionType = $event;
    if ($event === 'Multiple choice') {
      this.question.answers = new Array<Answer>(5);
      this.question.answers[0] = new Answer('');
      this.question.answers[1] = new Answer('');
      this.question.answers[2] = new Answer('');
      this.question.answers[3] = new Answer('');
      this.question.answers[4] = new Answer('');
    } else {
      this.question.answers = new Array<Answer>(1);
      this.question.answers[0] = new Answer('');
    }
    this.questionData.emit(this.question);
  }
  updateValue($event: string) {
    this.question.value = $event;
    this.questionData.emit(this.question);
  }
  answerChanged($event: any, index: number) {
    this.question.answers[index].value = $event;
    this.questionData.emit(this.question);

  }
  addSubQuestion(answer: Answer) {
    answer.question = new IQuestionData('', 'Multiline text');
  }
  updateAnswerQues($event: any, index: any) {
    this.question.answers[index].question = $event;
    this.questionData.emit(this.question);
  }

  save(questions: any) {
    questions.forEach((row: any) => {
      this.saveQuestion(row);
    });
  }
  saveQuestion(question: IQuestionData, callback?: any) {
    let responseData = null;
    this.questionService.saveQuestion(question).subscribe((response: any) => {
      if (response) {
        responseData = response;
        const answers = new Array<Answer>();
        question.answers.forEach((answer: any) => {
          answers.push(new Answer(answer, response.id));
        });
        if (question.subquestions && question.subquestions.length > 0) {
          this.saveAnswers(answers, this.save(question.subquestions));
        } else {
          this.saveAnswers(answers);
        }
      }
    });
    return responseData;
  }
  saveAnswers(answers: Answer[], callback?: any) {
    answers.forEach((answer: any) => {
      this.questionService.saveAnswer(answer).subscribe((response: any) => {
        if (response) {
          callback();
        }
      });
    });
  }
}
