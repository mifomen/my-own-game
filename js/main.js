import {setOpacityItem,setOpacityItems,getImage} from './utils.js';

// const points = document.querySelectorAll('.points');
const btnStartGame = document.querySelector('.start-game');

const menuChooseGame = document.querySelector('.choose-game');
const menuChoosePlayersCount = document.querySelector('#Start');
let chooseGameBtns = document.querySelectorAll('.choose-game > a.game-preview__title');
// console.log(chooseGameBtns)

let AllQuestion = '';
document.title = "Choose game"
for (let chooseGameBtn of chooseGameBtns) {
  chooseGameBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuChooseGame.classList.add('vh');
    menuChoosePlayersCount.classList.remove('vh');
    // console.log(evt.target.dataset.url);
    AllQuestion = loadDataJSON(evt.target.dataset.url);
    document.title=evt.target.dataset.url;
    initGame();
  })
}


function loadJSON(name) {
  var xhr = new XMLHttpRequest();

  xhr.open('GET', name , false);
  xhr.send();
  if (xhr.status != 200) {
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  }
  return xhr.responseText;
}

function loadDataJSON (URL) {
  return JSON.parse(loadJSON(`./quests/${URL}.json`));
}


function compareNumeric(a, b) {
  if (a.theme < b.theme) {return -1;}
  if (a.theme > b.theme) {return 1;}
  if ( a.points > b.points) {return 1;}
  if ( a.points < b.points) {return -1;}
  // if (a.theme ==  b.theme || a.points == b.points) return 0;
  // if (a.theme == b.theme || a.points < b.points)  return 1;
  return 0;
}

const initGame = () => {
  AllQuestion.themes.forEach((item) => {
    AllQuestion.questions.forEach ((itemTitle) => {
      if (item.theme === itemTitle.id) {
        item.theme = itemTitle.title;
      }
    });
  });

  let NumberInRow = Math.floor(AllQuestion.questions.length/AllQuestion.themes.length);
  AllQuestion.questions.sort(compareNumeric);
  for (let j =0; j<AllQuestion.themes.length; j++) {
    NewRowOfButtons(NumberInRow);
  }
}

const GetPointsForQuestion = () => {
  const NamingForPoints = document.querySelectorAll('.points');
  for (let  j = 0; j < NamingForPoints.length; j++) {
    NamingForPoints[j].textContent = AllQuestion.questions[j].points;
  }
};

const GetNameForThemes = () => {
  const allThemesTitle = document.querySelectorAll('.title-theme');

  for ( let i=0; i<allThemesTitle.length; i++) {
    allThemesTitle[i].textContent=AllQuestion.themes[i].title;
  }
};

document.addEventListener('DOMContentLoaded',() => {
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
  const NewButtonForPointsF  =  () => {
    const RowButtonPoints = document.createElement('button');
    RowButtonPoints.textContent = 't1';
    RowButtonPoints.type = 'button';
    RowButtonPoints.className = 'points';
    RowForPoints.appendChild(RowButtonPoints);
  };
  for (let j =0; j < evt; j++) {
    NewButtonForPointsF();
  }
  FindLastButton.appendChild(RowForPoints);
};


let StateOfCloseAnswer=0;
let players = 2;
const gameBegin = function (evt) {
  document.querySelector('.game-preview').classList.add('vh');
  document.querySelector('.Start-One').classList.remove('vh');
  self.textContent;

  if (evt === 3) {
    players=3;
    document.querySelector('.all').classList.add('green');
    document.querySelector('.all').textContent='0';
    document.querySelector('.all').classList.remove('all');
  }

  GetNameForThemes();
  GetPointsForQuestion();
  const All = document.querySelectorAll('.points');
  All.forEach((evt) => {
    evt.addEventListener('click',(e) => {
      e.preventDefault();
      evt.style.opacity='0';
      evt.style.visibility='hidden';
    });
  });

  const allBtnOfGame = document.querySelectorAll('.points');

  for (let i=0; i<allBtnOfGame.length; i++) {

    allBtnOfGame[i].addEventListener('click',(evet) => {
      evet.preventDefault();

      // ShowAnswer(AllQuestion.questions[i].points,AllQuestion.questions[i].answer,AllQuestion.questions[i].imageOfAnswer)
      Question(AllQuestion.questions[i].question,AllQuestion.questions[i].points,AllQuestion.questions[i].image,AllQuestion.questions[i].audio,AllQuestion.questions[i].answer,AllQuestion.questions[i].imageOfAnswer);

      getImage(AllQuestion.questions[i].image);
      StateOfCloseAnswer=0;
    });
  }
};

const startGameBtns = document.querySelectorAll('.start-game');

for ( const startGameBtn of startGameBtns) {
  startGameBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    document.querySelector('#Start').classList.add('vh');
    //eslint-disable-next-line
    // console.log(parseInt(startGameBtn.textContent,10));
    gameBegin(parseInt(startGameBtn.textContent,10));
  });
}

// var All = document.querySelectorAll('.game .Points')
// var FirstTheme  = document.querySelectorAll('.one .Points')
// var SecondTheme = document.querySelectorAll('.two .Points')
// var ThirdTheme = document.querySelectorAll('.three .Points')
// var FourTheme  = document.querySelectorAll('.four .Points')
// var FiveTheme  = document.querySelectorAll('.five .Points')

const GetPointsButton = function (FindButton,points,team) {
  const PointsButton = document.querySelector(FindButton);
  // console.log('points',points)
  PointsButton.addEventListener('click',(evt) => {
    evt.preventDefault();

    const WhoGetPoints = document.querySelector(team);
    if (WhoGetPoints.textContent == '0') {
      // console.log('WhoGetPoints=',WhoGetPoints, 'toString(WhoGetPoints.textContent)=',toString(WhoGetPoints.textContent));
      WhoGetPoints.textContent=0;
    }


    WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points);

     // WhoGetPoints.textContent = '500';
    PointsButton.disabled = true;

    switch (true) {
      case (team ==='.red'): {
        document.querySelector('#Red-Button-Minus').disabled = true;
        break;
      }
      case (team ==='.blue'): {
        document.querySelector('#Blue-Button-Minus').disabled = true;
        break;
      }
      case (team ==='.green'): {
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
const LosePointsButton = function (FindButton,points,team) {
  const PointsButton = document.querySelector(FindButton);

  PointsButton.addEventListener('click',(evt) => {
    evt.preventDefault();
    const WhoGetPoints = document.querySelector(team);
    if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
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
const NewButton = (msg,id,parent) => {
  const TextArea = document.createElement(parent);
  TextArea.className = 'image-output';
  TextArea.tabIndex = '1';
  // TextArea.style.opacity = 0;
  TextArea.id = 'Qestion-Delete';


  const SomeButton = document.createElement('button');
  SomeButton.type = 'button';
  SomeButton.id = id;
  SomeButton.textContent = msg;
  parent.appendChild(SomeButton);
};


const ShowAnswer = function(points,Answer,imageSrcOfAnswer) {
  // console.log('showanser points', points)
  const AreaForAnswer = document.createElement('div');
  AreaForAnswer.className = 'AnswerImage';
  AreaForAnswer.id = 'AnswerSee';

  if ( imageSrcOfAnswer !== '' ) {
    const imageOfAnswer = document.createElement('img');
    imageOfAnswer.className = 'Image-Of-Answer';
    imageOfAnswer.src=imageSrcOfAnswer;
    AreaForAnswer.appendChild(imageOfAnswer);
  }
  const AnswerCloseButton = document.createElement('span');
  AnswerCloseButton.className = 'AnswerCloseButton';
  AnswerCloseButton.innerHTML = 'закрыть ответ';

  AnswerCloseButton.addEventListener('click',  (evt) => {
    evt.preventDefault();
    if (document.querySelector('.AnswerImage')) {
      document.querySelector('.AnswerImage').parentNode.removeChild(document.querySelector('.AnswerImage'));
    }

  });

  AreaForAnswer.appendChild(AnswerCloseButton);

  const TextOfAnswer = document.createElement('h1');
  TextOfAnswer.innerHTML = Answer;
  TextOfAnswer.className = 'Text_Of_Answer';
  AreaForAnswer.appendChild(TextOfAnswer);

  const CreateVoteButton = function(NameButton,id,text,parentAdd) {
    NameButton = document.createElement('button');
    NameButton.type = 'button';
    NameButton.id = id;
    NameButton.className = 'VoteButton';
    NameButton.tabIndex = '1';
    NameButton.textContent = text;
    parentAdd.appendChild(NameButton);
  };

  CreateVoteButton('BlueButtonPlus','Blue-Button','+  синим',AreaForAnswer);
  CreateVoteButton('BlueButtonMinus','Blue-Button-Minus','-  синим',AreaForAnswer);

  if (players===3) {
    CreateVoteButton('GreenButtonPlus','Green-Button','+  зеленым',AreaForAnswer);
    CreateVoteButton('GreenButtonMinus','Green-Button-Minus','-  зеленым',AreaForAnswer);
  }

  CreateVoteButton('RedButtonPlus','Red-Button','+  красным',AreaForAnswer);
  CreateVoteButton('RedButtonMinus','Red-Button-Minus','-  красным',AreaForAnswer);

  document.body.appendChild(AreaForAnswer);
  // console.log('showanser points', points)
  GetPointsButton('#Blue-Button',points,'.blue');
  LosePointsButton ('#Blue-Button-Minus',points,'.blue');
  if (players===3) {
    GetPointsButton('#Green-Button',points,'.green');
    LosePointsButton ('#Green-Button-Minus',points,'.green');
  }
  GetPointsButton('#Red-Button',points,'.red');
  LosePointsButton ('#Red-Button-Minus',points,'.red');
};

const Question = function(evt,points,imageSrc,audioSrc,Answer,ImageIfAnswer) {
  const TextArea = document.createElement('div');
  TextArea.className = 'image-output';
  // TextArea.style.opacity = 0.5;
  // setTimeout(setTimeout(setOpacityItem(TextArea),6000),600);

  TextArea.id = 'Qestion-Delete';

  const TextOfQuestion = document.createElement('h1');
  TextOfQuestion.innerHTML = evt;
  TextOfQuestion.className = 'Text-Qestion';

  TextArea.appendChild(TextOfQuestion);


  if ( imageSrc !== '' ) {
    const ImageOfQuestion = document.createElement('img');
    ImageOfQuestion.className = 'Image-Of-Question';
    ImageOfQuestion.src=imageSrc;
    ImageOfQuestion.width ='45%';
    TextArea.appendChild(ImageOfQuestion);
  }

  if ( audioSrc !== '' ) {
    const AudioForQuestion = document.createElement('audio');
    AudioForQuestion.controls = true;
    AudioForQuestion.className = 'Audio-Of-Question';
    AudioForQuestion.autoplay = true;
    AudioForQuestion.src=audioSrc;
    AudioForQuestion.volume = 0.3;
    TextArea.appendChild(AudioForQuestion);
  }

  const textCloseButton = document.createElement('span');
  textCloseButton.className = 'TextCloseButton';
  textCloseButton.textContent = 'Закрыть вопрос';
  TextArea.appendChild(textCloseButton);

  // TextArea.addEventListener('click', () => {
  //   // TextArea.style.opacity  = 1;
  //   setTimeout(setOpacityItem(TextArea),6000);
  // })

       // console.log(evet.target)
      // setTimeout(setOpacityItem(TextArea),6000);

  document.body.appendChild(TextArea);


// setOpacityItem(TextArea,6000);
  document.querySelector('.TextCloseButton').addEventListener('click', (evet) => {
    evet.preventDefault();

    const elem1 = document.querySelector('#Qestion-Delete');
    if (elem1) {
      elem1.style.opacity = 0;
      // setTimeout(elem1.parentNode.removeChild(elem1),5500);
      elem1.parentNode.removeChild(elem1);
      StateOfCloseAnswer=1;
    }
    ShowAnswer(points,Answer,ImageIfAnswer);
    StateOfCloseAnswer = 1;
  });
};
