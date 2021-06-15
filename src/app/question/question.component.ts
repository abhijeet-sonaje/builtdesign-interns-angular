import { Component } from '@angular/core';
import { ApiService } from './../../services/api.service';
import { Question, ResponseFromApi } from './../../models';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  id = 1;
  option = null;
  currentQuestion: string = '';
  questionDataLength: number = 0;
  apiData: Question[] = [];

  answers: any = {};
  errMessage = "";
  score = 0;
  @Input() category: string = '';
  @Output() newScoreEvent = new EventEmitter<number>();

  constructor (private apiService: ApiService) {
    this.apiService.fetchDataFromApi(this.category).subscribe((response: ResponseFromApi) => {
      this.apiData = response.results;
      this.currentQuestion = response.results[0].question;
      this.questionDataLength = response.results.length;
    });
  }

  nextClick = () => {
    if (this.option === null) {
      this.errMessage = "Please select an option!";
      return;
    }

    this.answers[this.id] = this.option;
    if (this.id === this.questionDataLength) {
      this.calulateScore();
      return;
    }
    ++this.id;
    this.currentQuestion = this.apiData[this.id - 1].question;
    this.option = null;
  }

  handleRadioInputChange = (event: any) => {
    if (this.errMessage.length > 0)
      this.errMessage = "";
  }

  calulateScore = () => {
    console.log(this.answers, this.apiData);
    let scoreCount = 0;
    for (let i = 0; i < this.apiData.length; i++) {
      const correctAnswer = this.apiData[i].correct_answer === 'True' ? true : false;
      const correctAnswerGivenByUser = this.answers[i + 1];
      if (correctAnswer === correctAnswerGivenByUser) {
        scoreCount++;
      }
    }
    this.score = scoreCount;
    this.newScoreEvent.emit(this.score);
  };
}