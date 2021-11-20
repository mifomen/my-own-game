// import {getData} from './api.js';

var points = document.querySelectorAll('.points');
var BtnStartGame = document.querySelector('.start-game');

const menuChooseGame = document.querySelector('.choose-game');
const menuChoosePlayersCount = document.querySelector('#Start');
let chooseGameBtns = document.querySelectorAll('.choose-game > a.game-preview__title');
console.log(chooseGameBtns)

// let AllQuestion = '';

for (let chooseGameBtn of chooseGameBtns) {
  chooseGameBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuChooseGame.classList.add('vh');
    menuChoosePlayersCount.classList.remove('vh');
    console.log(evt.target.dataset.url)
    initGame(loadDataJSON(evt.target.dataset.url));
  })
}


function loadJSON(name) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', name , false);
  xhr.send();
  if (xhr.status != 200) {
    alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
  }
  return xhr.responseText;
}

function loadDataJSON (URL) {
  return JSON.parse(loadJSON(`./quests/${URL}.json`))
}


function compareNumeric(a, b) {
  if (a.theme < b.theme) return -1;
  if (a.theme > b.theme) return 1
    if ( a.points > b.points) return 1;
  if ( a.points < b.points) return -1;
  // if (a.theme ==  b.theme || a.points == b.points) return 0;
  // if (a.theme == b.theme || a.points < b.points)  return 1;
  return 0;
}

const initGame = (questionsArray) => {
  questionsArray.themes.forEach(function (item) {
    questionsArray.questions.forEach (function (itemTitle) {
      if (item.theme === itemTitle.id) {
        item.theme = itemTitle.title
      }
    })
  });

  let NumberInRow = Math.floor(questionsArray.questions.length/questionsArray.themes.length);


  questionsArray.questions.sort(compareNumeric);
// questionsArray.themes.sort(compareNumericThemes);

let GetNameForThemes = function () {
  let allThemesTitle = document.querySelectorAll('.title-theme');

  for ( let i=0; i<allThemesTitle.length; i++) {
    allThemesTitle[i].textContent=questionsArray.themes[i].title
  }
}

let GetPointsForQuestion = function () {
  let NamingForPoints = document.querySelectorAll('.points');
  for (let  j = 0; j < NamingForPoints.length; j++) {
    NamingForPoints[j].textContent = questionsArray.questions[j].points;
  }
}

for (let j =0; j<questionsArray.themes.length; j++) {
  NewRowOfButtons(NumberInRow);
}
}

document.addEventListener('DOMContentLoaded',function(evt){
  // addScript('questions.js');
  //eslint-disable-next-line
  console.log('DOMContentLoaded = success')
})

const ESC_KEY_CODE = 27;
const ENTER_KEY_CODE = 13;
const TAB_KEY_CODE = 9; //9
const UP_ARROW_KEY_CODE = 38; //33
const DOWN_ARROW_KEY_CODE = 40; //34

let NewRowOfButtons = function (evt) {
  let FindLastButton = document.querySelector('.Start-One');
  var RowForPoints = document.createElement('div');
  RowForPoints.className = 'row'
  var RowTitle = document.createElement('h1');
  RowTitle.textContent = '';
  // RowTitle.dataset.theme = NameOfTheme;
  RowTitle.innerHTML = ' '
  RowTitle.className = 'title-theme'
  RowForPoints.appendChild(RowTitle);
  var NewButtonForPointsF  =  function (evt) {
    let RowButtonPoints = document.createElement('button');
    RowButtonPoints.textContent = 't1';
    RowButtonPoints.type = "button"
    RowButtonPoints.className = 'points'
    RowForPoints.appendChild(RowButtonPoints);
  }
  for (let j =0; j< evt; j++) {
  NewButtonForPointsF();
}
FindLastButton.appendChild(RowForPoints);
}


let StateOfCloseAnswer=0;
let players = 2;
const gameBegin = function (evt) {
  document.querySelector('.game-preview').classList.add('vh');
  document.querySelector('.Start-One').classList.remove('vh');
  self.textContent;

  if (evt==3) {
    players=3;
    document.querySelector('.all').classList.add('green');
    document.querySelector('.all').textContent='0';
    document.querySelector('.all').classList.remove('all');
  }

  GetNameForThemes();
  GetPointsForQuestion();
}

const startGameBtns = document.querySelectorAll('.start-game');

for ( let startGameBtn of startGameBtns) {
  startGameBtn.addEventListener('click', () => {
    console.log(parseInt(startGameBtn.textContent,10));
    gameBegin(parseInt(startGameBtn.textContent,10));
  })
}


let All = document.querySelectorAll('.points');
All.forEach((evt) => {
  evt.addEventListener('click',function(e) {
    evt.style.opacity="0";
    evt.style.visibility="hidden";
  })
});

// var All = document.querySelectorAll('.game .points')
// var FirstTheme  = document.querySelectorAll('.one .points')
// var SecondTheme = document.querySelectorAll('.two .points')
// var ThirdTheme = document.querySelectorAll('.three .points')
// var FourTheme  = document.querySelectorAll('.four .points')
// var FiveTheme  = document.querySelectorAll('.five .points')

let GetPointsButton = function (FindButton,points,team) {
  let PointsButton = document.getElementById(FindButton);
  PointsButton.addEventListener('click',function (evt) {

    let WhoGetPoints = document.querySelector(team);
    if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
    WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points)
    PointsButton.disabled = true;

    switch (true) {
      case (team==='.red'): {
        document.getElementById('Red-Button-Minus').disabled = true;
        break;
      }
      case (team==='.blue'): {
        document.getElementById('Blue-Button-Minus').disabled = true;
      }
      case (team==='.green'): {
        document.getElementById('Green-Button-Minus').disabled = true;
        break;
      }
      dafault: {
        console.log('some errors'); //eslint-disable-line
      }
    };
  });
};
let LosePointsButton = function (FindButton,points,team) {
 let PointsButton = document.getElementById(FindButton);
 PointsButton.addEventListener('click',function (evt) {

  let WhoGetPoints = document.querySelector(team);

  if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
  WhoGetPoints.textContent = Number(WhoGetPoints.textContent) - Number(points)
  PointsButton.disabled = true;
 switch (true) {
      case (team==='.red'): {
        document.getElementById('Red-Button').disabled = true;
        break;
      }
      case (team==='.blue'): {
        document.getElementById('Blue-Button').disabled = true;
      }
      case (team==='.green'): {
        document.getElementById('Green-Button').disabled = true;
        break;
      }
      dafault: {
        console.log('some errors'); //eslint-disable-line
      }
    };
  });
};
var NewButton = function(msg,id,parent) {
  let TextArea = document.createElement(parent);
  TextArea.className = "image-output";
  TextArea.tabIndex = "1";
  TextArea.id = "Qestion-Delete";

  let SomeButton = document.createElement('button');
  SomeButton.type = 'button';
  SomeButton.id = id;
  SomeButton.textContent = msg;
  parent.appendChild(SomeButton);
}


let ShowAnswer = function(points,Answer,imageSrcOfAnswer) {
  let AreaForAnswer = document.createElement('div');
  AreaForAnswer.className = "AnswerImage";
  AreaForAnswer.id = "AnswerSee";

  if ( imageSrcOfAnswer !== '' ) {
    let imageOfAnswer = document.createElement('img');
    imageOfAnswer.className = 'Image-Of-Answer';
    imageOfAnswer.src=imageSrcOfAnswer;
    AreaForAnswer.appendChild(imageOfAnswer);
  }
  let AnswerCloseButton = document.createElement('span');
  AnswerCloseButton.className = 'AnswerCloseButton';
  AnswerCloseButton.innerHTML = 'закрыть ответ';
  AnswerCloseButton.addEventListener('click', function () {
   if (document.querySelector('.AnswerImage')) {document.querySelector('.AnswerImage').parentNode.removeChild(document.querySelector('.AnswerImage')) }

 })

  AreaForAnswer.appendChild(AnswerCloseButton);

  let TextOfAnswer = document.createElement('h1');
  TextOfAnswer.innerHTML = Answer;
  TextOfAnswer.className = 'Text_Of_Answer'
  AreaForAnswer.appendChild(TextOfAnswer);

  let CreateVoteButton = function(NameButton,id,text,parentAdd) {
    NameButton = document.createElement('button');
    NameButton.type = 'button';
    NameButton.id = id;
    NameButton.className = 'VoteButton';
    NameButton.tabIndex = "1";
    NameButton.textContent = text;
    parentAdd.appendChild(NameButton);
  }

  CreateVoteButton('BlueButtonPlus','Blue-Button','+  синим',AreaForAnswer)
  CreateVoteButton('BlueButtonMinus','Blue-Button-Minus','-  синим',AreaForAnswer)

  if (players===3) {

    CreateVoteButton('GreenButtonPlus','Green-Button','+  зеленым',AreaForAnswer)
    CreateVoteButton('GreenButtonMinus','Green-Button-Minus','-  зеленым',AreaForAnswer)
  }
  CreateVoteButton('RedButtonPlus','Red-Button','+  красным',AreaForAnswer)
  CreateVoteButton('RedButtonMinus','Red-Button-Minus','-  красным',AreaForAnswer)



  document.body.appendChild(AreaForAnswer);

  GetPointsButton('Blue-Button',points,'.blue');
  LosePointsButton ('Blue-Button-Minus',points,'.blue')

  if (players===3) {

    GetPointsButton('Green-Button',points,'.green');
    LosePointsButton ('Green-Button-Minus',points,'.green')
  }

  GetPointsButton('Red-Button',points,'.red');
  LosePointsButton ('Red-Button-Minus',points,'.red')

}

let Question = function(evt,points,imageSrc,audioSrc,Answer,ImageIfAnswer) {
  let TextArea = document.createElement('div');
  TextArea.className = "image-output";
  TextArea.id = "Qestion-Delete";

  let TextOfQuestion = document.createElement('h1');
  TextOfQuestion.innerHTML = evt;
  TextOfQuestion.className = 'Text-Qestion'
  TextArea.appendChild(TextOfQuestion);

  if ( imageSrc !== '' ) {
    let ImageOfQuestion = document.createElement('img');
    ImageOfQuestion.className = 'Image-Of-Question';
    ImageOfQuestion.src=imageSrc;
    ImageOfQuestion.width ='45%';
    TextArea.appendChild(ImageOfQuestion);
  }

  if ( audioSrc !== '' ) {
    let AudioForQuestion = document.createElement('audio');
    AudioForQuestion.controls = true;
    AudioForQuestion.className = 'Audio-Of-Question';
    AudioForQuestion.autoplay = true;
    AudioForQuestion.src=audioSrc;
    AudioForQuestion.volume = 0.3;
    TextArea.appendChild(AudioForQuestion);
  }

  let TextCloseButton = document.createElement('span');
  TextCloseButton.className = 'TextCloseButton';
  TextCloseButton.innerHTML = 'Закрыть вопрос';
  TextCloseButton.textContent = 'Закрыть вопрос';
  TextArea.appendChild(TextCloseButton);

  document.body.appendChild(TextArea);
  document.querySelector('.TextCloseButton').addEventListener('click',function (evt) {
   let elem1 = document.getElementById('Qestion-Delete');
   if (elem1) {elem1.parentNode.removeChild(elem1)
    StateOfCloseAnswer=1;
  }



  ShowAnswer(points,Answer,ImageIfAnswer)
  StateOfCloseAnswer = 1;

});

}
  var TabButton=1;
  document.onkeydown  = function(evt) {

     if (evt.keyCode == ESC_KEY_CODE ) {

  let elem = document.getElementById('AnswerSee');
   if (elem) {elem.parentNode.removeChild(elem)

    }
      let elem1 = document.getElementById('Qestion-Delete');
   if (elem1) {elem1.parentNode.removeChild(elem1)

    }
}

    if (evt.keyCode == TAB_KEY_CODE && TabButton==1) {


}
    if (evt.keyCode == TAB_KEY_CODE && TabButton==2) {

    }

};

 // удаление окна с вопросом
 let testDiologDelete = function () {
  var elem = document.getElementById('Qestion-Delete');
  if (elem) {elem.parentNode.removeChild(elem)}
}

let StateOfButton;
let StateOfButtonRightSide=1;
let  ArrayOfButtonsVote;
document.onkeydown  = function(evt) {
  if (evt.keyCode == UP_ARROW_KEY_CODE ) {
    if (document.querySelector('.AnswerImage')) {
      ArrayOfButtonsVote = document.querySelectorAll('.VoteButton');
      StateOfButton=0;
      ArrayOfButtonsVote[0].focus()
    }
  }

  if (evt.keyCode == DOWN_ARROW_KEY_CODE ) {
    ArrayOfButtonsVote[ArrayOfButtonsVote.length-1].focus()
  }
}

let allBtnOfGame = document.querySelectorAll('.points');

for (let i=0; i<allBtnOfGame.length; i++) {
  allBtnOfGame[i].addEventListener('click',function(evt) {
// ShowAnswer(AllQuestion[i].points,AllQuestion[i].answer,AllQuestion[i].imageOfAnswer)
  Question(AllQuestion.questions[i].question,AllQuestion.questions[i].points,AllQuestion.questions[i].image,AllQuestion.questions[i].audio,AllQuestion.questions[i].answer,AllQuestion.questions[i].imageOfAnswer);
StateOfCloseAnswer=0;
 })
}

