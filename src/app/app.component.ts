import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = sampleData[0].question;
  id = 1;
  questionDataLength = sampleData.length;
  option = null;

  answers: any = {};
  errMessage = "";
  showScoreElem = false;
  score = 0;

  nextClick = () => {
    if (this.option === null) {
      this.errMessage = "Please select an option!";
      return;
    }

    this.answers[this.id] = this.option;
    if (this.id === this.questionDataLength) {
      this.showScoreElem = true;
      this.calulateScore();
      return;
    }
    ++this.id;
    this.defaultQuestion = sampleData[this.id - 1].question;
    this.option = null;
  }

  handleRadioInputChange = (event: any) => {
    if (this.errMessage.length > 0)
      this.errMessage = "";
  }

  calulateScore = () => {
    console.log(this.answers, sampleData);
    let scoreCount = 0;
    for (let i = 0; i < sampleData.length; i++) {
      const correctAnswer = sampleData[i].correct_answer === 'True' ? true : false;
      const correctAnswerGivenByUser = this.answers[i + 1];
      if (correctAnswer === correctAnswerGivenByUser) {
        scoreCount++;
      }
    }
    this.score = scoreCount;
  };
}

const sampleData = [
  {
    "category": "Animals",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The Axolotl is an amphibian that can spend its whole life in a larval state.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Animals",
    "type": "boolean",
    "difficulty": "easy",
    "question": "A slug&rsquo;s blood is green.",
    "correct_answer": "True",
    "incorrect_answers": [
      "False"
    ]
  },
  {
    "category": "Animals",
    "type": "boolean",
    "difficulty": "easy",
    "question": "Kangaroos keep food in their pouches next to their children.",
    "correct_answer": "False",
    "incorrect_answers": [
      "True"
    ]
  },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "A bear does NOT defecate during hibernation. ",
  //   "correct_answer": "True",
  //   "incorrect_answers": [
  //     "False"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "Rabbits are rodents.",
  //   "correct_answer": "False",
  //   "incorrect_answers": [
  //     "True"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "A flock of crows is known as a homicide.",
  //   "correct_answer": "False",
  //   "incorrect_answers": [
  //     "True"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "Cats have whiskers under their legs.",
  //   "correct_answer": "True",
  //   "incorrect_answers": [
  //     "False"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "The Killer Whale is considered a type of dolphin.",
  //   "correct_answer": "True",
  //   "incorrect_answers": [
  //     "False"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "Rabbits are carnivores.",
  //   "correct_answer": "False",
  //   "incorrect_answers": [
  //     "True"
  //   ]
  // },
  // {
  //   "category": "Animals",
  //   "type": "boolean",
  //   "difficulty": "easy",
  //   "question": "The internet browser Firefox is named after the Red Panda.",
  //   "correct_answer": "True",
  //   "incorrect_answers": [
  //     "False"
  //   ]
  // }
];
