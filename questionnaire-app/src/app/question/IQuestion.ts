import { Answer } from './IAnswer';

export class IQuestionData {
    id?: number;
    value: string;
    answers: Answer[];
    refAnswerId?: number;
    questionType: string;
    subquestions?: IQuestionData[];
    /**
     *
     */
    // tslint:disable-next-line: align
    constructor(value: string, questionType?: string, answers?: Answer[], id?: number, subquestions?: IQuestionData[]) {
        this.value = value;
        this.id = id;
        this.answers = answers;
        this.questionType = questionType;
        this.subquestions = subquestions;

    }
}
