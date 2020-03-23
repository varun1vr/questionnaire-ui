import { IQuestionData } from './IQuestion';

export class Answer {
    id?: number;
    value: string;
    questionId?: number;
    question?: IQuestionData;
    constructor(value: string, questionId?: number) {
        this.value = value;
        this.questionId = questionId;
    }
}
