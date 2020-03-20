import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questions = new Array();
  values: any[];
  selectedValue: string;
  constructor() { }

  ngOnInit() {
    this.values = ['Multiline text', ' Single choice', ' Multiple choice'];
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
    this.selectedValue = this.values[0];
  }
  addQuestion() {
    this.questions.push(1);
  }
}
