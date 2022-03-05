import { getImage } from './utils.js';

// const points = document.querySelectorAll('.points');
// const btnStartGame = document.querySelector('.start-game');

const menuChooseGame = document.querySelector('.choose-game');
const menuChoosePlayersCount = document.querySelector('#Start');
const chooseGameBtns = document.querySelectorAll('.choose-game > a.game-preview__title');
// console.log(chooseGameBtns)

let AllQuestion = '';
document.title = 'Choose game';
for (const chooseGameBtn of chooseGameBtns) {
  chooseGameBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuChooseGame.classList.add('vh');
    menuChoosePlayersCount.classList.remove('vh');
    // console.log(evt.target.dataset.url);
    AllQuestion = loadDataJSON(evt.target.dataset.url);
    document.title = evt.target.dataset.url;
    initGame();
  });
}


function loadJSON(name) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', name, false);
  xhr.send();
  if (xhr.status !== 200) {
    //eslint-disable-next-line
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  }
  return xhr.responseText;
}

function loadDataJSON(URL) {
  return JSON.parse(loadJSON(`./quests/${URL}.json`));
}


function compareNumeric(a, b) {
  if (a.theme < b.theme) { return -1; }
  if (a.theme > b.theme) { return 1; }
  if (a.points > b.points) { return 1; }
  if (a.points < b.points) { return -1; }
  // if (a.theme ==  b.theme || a.points == b.points) return 0;
  // if (a.theme == b.theme || a.points < b.points)  return 1;
  return 0;
}


const GetPointsForQuestion = () => {
  const NamingForPoints = document.querySelectorAll('.points');
  for (let j = 0; j < NamingForPoints.length; j++) {
    NamingForPoints[j].textContent = AllQuestion.questions[j].points;
  }
};

const GetNameForThemes = () => {
  const allThemesTitle = document.querySelectorAll('.title-theme');

  for (let i = 0; i < allThemesTitle.length; i++) {
    allThemesTitle[i].textContent = AllQuestion.themes[i].title;
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // addScript('questions.js');
  //eslint-disable-next-line
  // console.log('DOMContentLoaded = success');
});

const NewRowOfButtons = (evt) => {
  const FindLastButton = document.querySelector('.Start-One');
  const RowForPoints = document.createElement('div');
  RowForPoints.className = 'row';
  const RowTitle = document.createElement('h1');
  RowTitle.textContent = '';
  // RowTitle.dataset.theme = NameOfTheme;
  RowTitle.innerHTML = ' ';
  RowTitle.className = 'title-theme';
  RowForPoints.appendChild(RowTitle);
  const NewButtonForPointsF = () => {
    const RowButtonPoints = document.createElement('button');
    RowButtonPoints.textContent = 't1';
    RowButtonPoints.type = 'button';
    RowButtonPoints.className = 'points';
    RowForPoints.appendChild(RowButtonPoints);
  };
  for (let j = 0; j < evt; j++) {
    NewButtonForPointsF();
  }
  FindLastButton.appendChild(RowForPoints);
};

function initGame() {
  AllQuestion.themes.forEach((item) => {
    AllQuestion.questions.forEach((itemTitle) => {
      if (item.theme === itemTitle.id) {
        item.theme = itemTitle.title;
      }
    });
  });

  const NumberInRow = Math.floor(AllQuestion.questions.length / AllQuestion.themes.length);
  AllQuestion.questions.sort(compareNumeric);
  for (let j = 0; j < AllQuestion.themes.length; j++) {
    NewRowOfButtons(NumberInRow);
  }
}

let StateOfCloseAnswer = 0;
let players = 2;
const gameBegin = function (evt) {
  document.querySelector('.game-preview').classList.add('vh');
  document.querySelector('.Start-One').classList.remove('vh');
  self.textContent;

  if (evt === 3) {
    players = 3;
    document.querySelector('.all').classList.add('green');
    document.querySelector('.all').textContent = '0';
    document.querySelector('.all').classList.remove('all');
  }

  GetNameForThemes();
  GetPointsForQuestion();
  const All = document.querySelectorAll('.points');
  All.forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      target.style.opacity = '0';
      target.style.visibility = 'hidden';
    });
  });

  const allBtnOfGame = document.querySelectorAll('.points');

  for (let i = 0; i < allBtnOfGame.length; i++) {

    allBtnOfGame[i].addEventListener('click', (evet) => {
      evet.preventDefault();

      // ShowAnswer(AllQuestion.questions[i].points,AllQuestion.questions[i].answer,AllQuestion.questions[i].imageOfAnswer)
      Question(AllQuestion.questions[i].question, AllQuestion.questions[i].points, AllQuestion.questions[i].image, AllQuestion.questions[i].audio, AllQuestion.questions[i].answer, AllQuestion.questions[i].imageOfAnswer);

      getImage(AllQuestion.questions[i].image);
      StateOfCloseAnswer = 0;
    });
  }
};

const startGameBtns = document.querySelectorAll('.start-game');

for (const startGameBtn of startGameBtns) {
  startGameBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('#Start').classList.add('vh');
    //eslint-disable-next-line
    // console.log(parseInt(startGameBtn.textContent,10));
    gameBegin(parseInt(startGameBtn.textContent, 10));
  });
}

// var All = document.querySelectorAll('.game .Points')
// var FirstTheme  = document.querySelectorAll('.one .Points')
// var SecondTheme = document.querySelectorAll('.two .Points')
// var ThirdTheme = document.querySelectorAll('.three .Points')
// var FourTheme  = document.querySelectorAll('.four .Points')
// var FiveTheme  = document.querySelectorAll('.five .Points')

const GetPointsButton = function (FindButton, points, team) {
  const PointsButton = document.querySelector(FindButton);
  // console.log('points',points)
  PointsButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    const WhoGetPoints = document.querySelector(team);
    if (WhoGetPoints.textContent === '0') {
      // console.log('WhoGetPoints=',WhoGetPoints, 'toString(WhoGetPoints.textContent)=',toString(WhoGetPoints.textContent));
      WhoGetPoints.textContent = 0;
    }


    WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points);
    PointsButton.disabled = true;

    switch (true) {
      case (team === '.red'): {
        document.querySelector('#Red-Button-Minus').disabled = true;
        break;
      }
      case (team === '.blue'): {
        document.querySelector('#Blue-Button-Minus').disabled = true;
        break;
      }
      case (team === '.green'): {
        document.querySelector('#Green-Button-Minus').disabled = true;
        break;
      }
      default: {
        console.log('some errors'); //eslint-disable-line
        break;
      }
    }
  });
};
const LosePointsButton = function (FindButton, points, team) {
  const PointsButton = document.querySelector(FindButton);

  PointsButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const WhoGetPoints = document.querySelector(team);
    if (WhoGetPoints.textContent === '0') { WhoGetPoints.textContent = 0; } //может быть не надо {}
    WhoGetPoints.textContent = Number(WhoGetPoints.textContent) - Number(points);
    PointsButton.disabled = true;
    switch (true) {
      case (team === '.red'): {
        document.querySelector('#Red-Button').disabled = true;
        break;
      }
      case (team === '.blue'): {
        document.querySelector('#Blue-Button').disabled = true;
        break;
      }
      case (team === '.green'): {
        document.querySelector('#Green-Button').disabled = true;
        break;
      }
      default: {
        console.log('some errors'); //eslint-disable-line
      }
    }
  });
};

const ShowAnswer = function (points, Answer, imageSrcOfAnswer) {
  const answerArea = document.createElement('div');
  answerArea.className = 'AnswerImage';
  answerArea.id = 'AnswerSee';

  if (imageSrcOfAnswer !== '') {
    const imageOfAnswer = document.createElement('img');
    imageOfAnswer.className = 'Image-Of-Answer';
    imageOfAnswer.src = imageSrcOfAnswer;
    answerArea.appendChild(imageOfAnswer);
  }

  const btnCloseAnswerArea = document.createElement('span');
  btnCloseAnswerArea.className = 'btn-close-answer-area';
  btnCloseAnswerArea.innerHTML = 'закрыть ответ';

  btnCloseAnswerArea.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (document.querySelector('.AnswerImage')) {
      document.querySelector('.AnswerImage').parentNode.removeChild(document.querySelector('.AnswerImage'));
    }
  });

  answerArea.appendChild(btnCloseAnswerArea);

  const TextOfAnswer = document.createElement('h1');
  TextOfAnswer.innerHTML = Answer;
  TextOfAnswer.className = 'question-text-answer';
  answerArea.appendChild(TextOfAnswer);

  const CreateVoteButton = function (elemBtn, id, txtContent, parentAdd) {
    elemBtn = document.createElement('button');
    elemBtn.type = 'button';
    elemBtn.id = id;
    elemBtn.className = `VoteButton ${id}`;
    elemBtn.tabIndex = '1';
    elemBtn.textContent = txtContent;
    parentAdd.appendChild(elemBtn);
  };

  CreateVoteButton('BlueButtonPlus', 'Blue-Button', '+  синим', answerArea);
  CreateVoteButton('BlueButtonMinus', 'Blue-Button-Minus', '-  синим', answerArea);

  if (players === 3) {
    CreateVoteButton('GreenButtonPlus', 'Green-Button', '+  зеленым', answerArea);
    CreateVoteButton('GreenButtonMinus', 'Green-Button-Minus', '-  зеленым', answerArea);
  }

  CreateVoteButton('RedButtonPlus', 'Red-Button', '+  красным', answerArea);
  CreateVoteButton('RedButtonMinus', 'Red-Button-Minus', '-  красным', answerArea);

  document.body.appendChild(answerArea);
  GetPointsButton('#Blue-Button', points, '.blue');
  LosePointsButton('#Blue-Button-Minus', points, '.blue');

  if (players === 3) {
    GetPointsButton('#Green-Button', points, '.green');
    LosePointsButton('#Green-Button-Minus', points, '.green');
  }

  GetPointsButton('#Red-Button', points, '.red');
  LosePointsButton('#Red-Button-Minus', points, '.red');
};

function Question(evt, points, imageSrc, audioSrc, Answer, imageAnswer) {
  const questionArea = document.createElement('div');
  questionArea.className = 'image-output js-question-delete';
  // questionArea.id = '';

  const questionText = document.createElement('h1');
  questionText.innerHTML = evt;
  questionText.className = 'question-text';
  questionArea.appendChild(questionText);


  if (imageSrc !== '') {
    const ImageOfQuestion = document.createElement('img');
    ImageOfQuestion.className = 'Image-Of-Question';
    ImageOfQuestion.src = imageSrc;
    ImageOfQuestion.width = '45%';
    questionArea.appendChild(ImageOfQuestion);
  }

  if (audioSrc !== '') {
    const questionAudio = document.createElement('audio');
    questionAudio.controls = true;
    questionAudio.className = 'Audio-Of-Question';
    questionAudio.autoplay = true;
    questionAudio.src = audioSrc;
    questionAudio.volume = 0.3;
    questionArea.appendChild(questionAudio);
  }

  const textCloseButton = document.createElement('span');
  textCloseButton.className = 'btn-close-question js-close-question';
  textCloseButton.textContent = 'Закрыть вопрос';
  questionArea.appendChild(textCloseButton);

  document.body.appendChild(questionArea);

  document.querySelector('.js-close-question').addEventListener('click', (evet) => {
    evet.preventDefault();

    const elem1 = document.querySelector('.js-question-delete');
    if (elem1) {
      elem1.style.opacity = 0;
      // setTimeout(elem1.parentNode.removeChild(elem1),5500);
      elem1.parentNode.removeChild(elem1);
      StateOfCloseAnswer = 1;
    }
    ShowAnswer(points, Answer, imageAnswer);
    //eslint-disable-next-line
    StateOfCloseAnswer = 1;
  });
}
