import { Answer } from './IAnswer';

export class IQuestionData {
    id?: number;
    value: string;
    answers: Answer[];
    refAnswerId?: number;
    selectedValue: string;
    subquestions?: IQuestionData[];
    /**
     *
     */
    // tslint:disable-next-line: align
    constructor(value: string, selectedValue?: string, answers?: Answer[], id?: number, subquestions?: IQuestionData[]) {
        this.value = value;
        this.id = id;
        this.answers = answers;
        this.selectedValue = selectedValue;
        this.subquestions = subquestions;

    }
}
