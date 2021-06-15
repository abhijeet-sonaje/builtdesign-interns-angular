import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Question, ResponseFromApi } from './../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = 0;
  categorySelected = "27";

  constructor (private apiService: ApiService) { }

  updateNewScore (newScore: number) {
    this.score = newScore;
  }

  refresh = () => {
    this.score = 0;
  }
}