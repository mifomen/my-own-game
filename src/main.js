// // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
// let vh = window.innerHeight * 0.01;
// // Then we set the value in the --vh custom property to the root of the document
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });
// window.storage.globalVar = AllQuestion.length;

// var links = document.getElementsByTagName('a');
// for (var i = 0; i < links.length; i++) {
//   links[i].addEventListener('click',function (evt) {
//     evt.preventDefault();
//   })
// };
//
var points = document.querySelectorAll('.points');
var BtnStartGame = document.getElementById("StartGameFor2");

function addScript(src) {
  let elem = document.createElement("script");
  elem.src = src;
  document.body.appendChild(elem);
}

document.addEventListener('DOMContentLoaded',function(evt){
  addScript('questions.js');
})



// console.log(AllQuestion.length)


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
  // console.log('j= ' + j)
  NewButtonForPointsF();
}
FindLastButton.appendChild(RowForPoints);
// console.log('NewRowOfButtons')
}

let NumberInRow = localStorage.getItem('NumberInRow');
for (let j =0; j< Math.floor(localStorage.getItem('length')/NumberInRow); j++) {
  // console.log('j= ' + j)
  NewRowOfButtons (NumberInRow);

}

// var localVar = window.storage.globalVar;
// console.log('localStorage.getItem(length)' + ' ' + localStorage.getItem('length'))

var StayOfCloseAnswer=0;
// BtnStartGame.addEventListener('click',function(evt){
//   document.querySelector('.game').classList.add('hidden');
//   document.querySelector('.Start-One').classList.remove('hidden');
// })
var players=2;

console.log(players)
var GameBegin = function (evt) {

   // let elem = document.querySelector('.preview');
  // if (elem) {elem.parentNode.removeChild(elem)}


  document.querySelector('.game-preview').classList.add('vh');
  document.querySelector('.Start-One').classList.remove('vh');
  self.textContent;
  if (evt==3) {
    players=3;
    document.querySelector('.all').classList.add('green');
    document.querySelector('.all').textContent='0';
    document.querySelector('.all').classList.remove('all');
  // console.log('textContent')

}
// let fin = document.getElementById('StartGameFor3')
console.log(players)
}


var All  = document.querySelectorAll('.points');
All.forEach(function(evt){
  evt.addEventListener('click',function(e) {
    evt.style.opacity="0";
    evt.style.visibility="hidden";
  })
});

var All = document.querySelectorAll('.game .points')
// var FirstTheme  = document.querySelectorAll('.one .points')
// var SecondTheme = document.querySelectorAll('.two .points')
// var ThirdTheme = document.querySelectorAll('.three .points')
// var FourTheme  = document.querySelectorAll('.four .points')
// var FiveTheme  = document.querySelectorAll('.five .points')

var GetPointsButton = function (FindButton,points,team) {
 let PointsButton = document.getElementById(FindButton);
 PointsButton.addEventListener('click',function (evt) {

  var WhoGetPoints = document.querySelector(team); 
  if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
  WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points)
  PointsButton.disabled = true;
  if (team==='.red') {
    document.getElementById('Red-Button-Minus').disabled = true;
  } else {
    if (team==='.blue') {
      document.getElementById('Blue-Button-Minus').disabled = true;
    }  else {
     if (team==='.green') {
      document.getElementById('Green-Button-Minus').disabled = true; 
    }
  }
}
});
};
var LosePointsButton = function (FindButton,points,team) {
 let PointsButton = document.getElementById(FindButton);
 PointsButton.addEventListener('click',function (evt) {

  var WhoGetPoints = document.querySelector(team); 

  if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
  WhoGetPoints.textContent = Number(WhoGetPoints.textContent) - Number(points)
  PointsButton.disabled = true;
  if (team==='.red') {
    document.getElementById('Red-Button').disabled = true;
  } else {
    if (team==='.blue') {
      document.getElementById('Blue-Button').disabled = true;
    } else {
     if (team==='.green') {
      document.getElementById('Green-Button').disabled = true; 
    }
  }
  }
});
};
var NewButton = function(msg,id,parent) {
  var TextArea = document.createElement(parent);
  TextArea.className = "image-output";
  TextArea.tabIndex = "1";
  TextArea.id = "Qestion-Delete";




  var SomeButton = document.createElement('button');
  SomeButton.type = 'button';
  SomeButton.id = id;
  SomeButton.textContent = msg;
  parent.appendChild(SomeButton);
}


var ShowAnswer = function(points,Answer,imageSrcOfAnswer) {
  var AreaForAnswer = document.createElement('div');
  AreaForAnswer.className = "AnswerImage";
  AreaForAnswer.id = "AnswerSee";

  // let AnswerMsg = document.createElement('span');
  // AnswerMsg.innerHTML = 'ОТВЕТ';
  // AnswerMsg.className = 'AnswerMsg vh'
  // AreaForAnswer.appendChild(AnswerMsg);

  if ( imageSrcOfAnswer !== '' ) {
    let imageOfAnswer = document.createElement('img');
    imageOfAnswer.className = 'Image-Of-Answer';
    imageOfAnswer.src=imageSrcOfAnswer;
    AreaForAnswer.appendChild(imageOfAnswer);
  } 
  var AnswerCloseButton = document.createElement('span');
  AnswerCloseButton.className = 'AnswerCloseButton';
  AnswerCloseButton.innerHTML = 'крест ответ';
  // AnswerCloseButton.textContent = 'крест ответ';
  AnswerCloseButton.addEventListener('click', function () {
   if (document.querySelector('.AnswerImage')) {document.querySelector('.AnswerImage').parentNode.removeChild(document.querySelector('.AnswerImage')) }

 })
  AreaForAnswer.appendChild(AnswerCloseButton);



  var TextOfAnswer = document.createElement('h1');
  TextOfAnswer.innerHTML = Answer;
  TextOfAnswer.className = 'Text_Of_Answer'
  AreaForAnswer.appendChild(TextOfAnswer);


  var BlueButtonMinus = document.createElement('button');
  BlueButtonMinus.type = 'button';
  BlueButtonMinus.id = "Blue-Button-Minus";
  BlueButtonMinus.className = 'VoteButton';
  BlueButtonMinus.tabIndex = "1";
  BlueButtonMinus.textContent = " - синим"
  AreaForAnswer.appendChild(BlueButtonMinus);

  var BlueButtonPlus = document.createElement('button');
  BlueButtonPlus.type = 'button';
  BlueButtonPlus.id = "Blue-Button";
  BlueButtonPlus.className = 'VoteButton';
  BlueButtonPlus.tabIndex = "1";
  BlueButtonPlus.textContent = "+  синим"
  AreaForAnswer.appendChild(BlueButtonPlus);

  var RedButtonMinus = document.createElement('button');
  RedButtonMinus.type = 'button';
  RedButtonMinus.id = "Red-Button-Minus";
  RedButtonMinus.className = 'VoteButton';
  RedButtonMinus.tabIndex = "1";
  RedButtonMinus.textContent = "- красным"
  AreaForAnswer.appendChild(RedButtonMinus);

  var RedButtonPlus = document.createElement('button');
  RedButtonPlus.type = 'button';
  RedButtonPlus.id = "Red-Button";
  RedButtonPlus.className = 'VoteButton';
  RedButtonPlus.tabIndex = "1";
  RedButtonPlus.textContent = "+ зеленым"
  AreaForAnswer.appendChild(RedButtonPlus);
  
  if (players===3) {
    console.log('yes')
    var GreenButtonMinus = document.createElement('button');
    GreenButtonMinus.type = 'button';
    GreenButtonMinus.id = "Green-Button-Minus";
    GreenButtonMinus.className = 'VoteButton';
    GreenButtonMinus.tabIndex = "1";
    GreenButtonMinus.textContent = "- зеленым"
    AreaForAnswer.appendChild(GreenButtonMinus);

    var GreenButtonPlus = document.createElement('button');
    GreenButtonPlus.type = 'button';
    GreenButtonPlus.id = "Green-Button";
    GreenButtonPlus.className = 'VoteButton';
    GreenButtonPlus.tabIndex = "1";
    GreenButtonPlus.textContent = "+ зеленым"
    AreaForAnswer.appendChild(GreenButtonPlus);




  }

  document.body.appendChild(AreaForAnswer);

  if (players===3) {

    GetPointsButton('Green-Button',points,'.green');
    LosePointsButton ('Green-Button-Minus',points,'.green')
}
  GetPointsButton('Blue-Button',points,'.blue');
  LosePointsButton ('Blue-Button-Minus',points,'.blue')
  GetPointsButton('Red-Button',points,'.red');
  LosePointsButton ('Red-Button-Minus',points,'.red')

}

// ShowAnswer(AllQuestion[0].answer)
var Question = function(evt,points,imageSrc,audioSrc,Answer,ImageIfAnswer) {
  var TextArea = document.createElement('div');
  TextArea.className = "image-output";
  TextArea.id = "Qestion-Delete";

  var TextOfQuestion = document.createElement('h1');
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
    AudioForQuestion.src=audioSrc;
    AudioForQuestion.volume = 0.1;
    TextArea.appendChild(AudioForQuestion);
  } 

  var TextCloseButton = document.createElement('span');
  TextCloseButton.className = 'TextCloseButton';
  TextCloseButton.innerHTML = 'крест';
  TextCloseButton.textContent = 'крест';
  TextArea.appendChild(TextCloseButton);

  document.body.appendChild(TextArea);
  document.querySelector('.TextCloseButton').addEventListener('click',function (evt) {
   let elem1 = document.getElementById('Qestion-Delete');
   if (elem1) {elem1.parentNode.removeChild(elem1) 
    StayOfCloseAnswer=1;
    // console.log(StayOfCloseAnswer)
  }
  
  ShowAnswer(points,Answer,ImageIfAnswer)
  StayOfCloseAnswer = 1;

  // if (Answer !== '' || ImageIfAnswer!=='') {ShowAnswer(points,Answer,ImageIfAnswer)}
});

  




//   PointsButton.addEventListener('click',function (evt) {
//   var WhoGetPoints = document.querySelector(team); 
//   if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
//   WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points)
//   PointsButton.disabled = true;
// });

// GetPointsButton('Left-Button',points,'.blue');
// GetPointsButton('Right-Button',points,'.red');

// LosePointsButton ('Blue-Button-Minus',points,'.blue')
// LosePointsButton ('Red-Button-Minus',points,'.red')
}

//code keys https://puzzleweb.ru/javascript/char_codes-key_codes.php
let ESC_KEY_CODE = 27;
let ENTER_KEY_CODE = 13;
let TAB_KEY_CODE = 9; //9
let UP_ARROW_KEY_CODE = 38; //33
let DOWN_ARROW_KEY_CODE = 40; //34
// let CloneImageDiolog = ;
// console.log(document.querySelector('.TextCloseButton'));
//  document.querySelector('.TextCloseButton').addEventListener('click',function () {

//  let elem1 = document.getElementById('Qestion-Delete');
//     if (elem1) {elem1.parentNode.removeChild(elem1)}
//  });
// TextCloseButton
 // удаление окна с вопросом
 let testDiologDelete = function () {
  var elem = document.getElementById('Qestion-Delete');
  if (elem) {elem.parentNode.removeChild(elem)}
}

let StayOfButton;
let StayOfButtonRightSide=1;
var  ArrayOfButtonsVote;
// console.log(StayOfButton)
document.onkeydown  = function(evt) {
  if (evt.keyCode == ESC_KEY_CODE || evt.keyCode == TAB_KEY_CODE ) {

    var elem = document.getElementById('Qestion-Delete');
    if (elem) {elem.parentNode.removeChild(elem)
     StayOfCloseAnswer=1;
     // console.log(StayOfCloseAnswer)
   }
   // ShowAnswer(points,Answer,ImageIfAnswer)

   var elem = document.querySelector('.AnswerImage');
   if (elem) {elem.parentNode.removeChild(elem)

   }
    // ShowAnswer(points,Answer,ImageIfAnswer)
  }

  if (evt.keyCode == UP_ARROW_KEY_CODE ) {
   if (document.querySelector('.AnswerImage')) {
    ArrayOfButtonsVote = document.querySelectorAll('.VoteButton');

 // console.log(ArrayOfButtonsVote)
 StayOfButton=0;

 ArrayOfButtonsVote[0].focus()
  // console.log(StayOfButton)
}
  // if (StayOfButton>3) {StayOfButton=0}
  //   if (StayOfButton==0) {
  //     ArrayOfButtonsVote[0].focus() 
  //     StayOfButton++
  //   } else {
  //     if (StayOfButton==1) {
  //       ArrayOfButtonsVote[1].focus() 
  //       StayOfButton++
  //     }  else {
  //       if (StayOfButton==2) {
  //         ArrayOfButtonsVote[2].focus() 
  //         StayOfButton++
  //       }  else {
  //         if (StayOfButton==3) {
  //           ArrayOfButtonsVote[3].focus() 
  //           StayOfButton=0
  //         } 
  //       }
  //     } 
  //   }
  // }
}


// // StayOfButton = 1;
// if (StayOfButton === 1) { 
//  if (document.getElementById('Left-Button')) {
//   document.getElementById('Left-Button').focus()
//     console.log('StayOfButton' + '  ' + StayOfButton)
//   StayOfButton = 0
// }

// } else {
//  if (document.getElementById('Blue-Button-Minus')) {
//     document.getElementById('Blue-Button-Minus').focus() 
//        console.log('StayOfButton' + '  ' + StayOfButton)
//     StayOfButton = 1
// }
// }
if (evt.keyCode == DOWN_ARROW_KEY_CODE ) {


}
}




// // StayOfButton = 1;
// if (StayOfButtonRightSide === 1) { 
//  if (document.getElementById('Right-Button')) {
//   document.getElementById('Right-Button').focus()
//       console.log('StayOfButtonRightSide' + '  ' + StayOfButtonRightSide)
//   StayOfButtonRightSide = 0
// }

// } else {
//  if (document.getElementById('Red-Button-Minus')) {
//     document.getElementById('Red-Button-Minus').focus() 
//     console.log('StayOfButtonRightSide' + '  ' + StayOfButtonRightSide)
//     StayOfButtonRightSide = 1
// }
// }
// } 







  // var TimeMassive = [];
  // TimeMassive = Array.from (FindAllTags);
  // TimeMassive.forEach(function (it) {

  //   return it.style.cssText = it.style.cssText.replace('font-size: ' + localStorage["LocalProperty0"],'');
  //   // it.style.cssText.replace(f,'');
  // })

  // var ArrayOfQuestions = [];
  // ArrayOfQuestions = Array.from (All);

  let AllButtons = document.querySelectorAll('.points');
  // console.log(AllButtons)
  for (let i=0; i<AllButtons.length; i++) {

    AllButtons[i].addEventListener('click',function(evt) {
      // ShowAnswer(,AllQuestion[i].answer,AllQuestion[i].imageOfAnswer)
      Question(AllQuestion[i].question,AllQuestion[i].points,AllQuestion[i].image,AllQuestion[i].audio,AllQuestion[i].answer,AllQuestion[i].imageOfAnswer);

      StayOfCloseAnswer=0;
    })

  }

  // for (AllQuestio of AllQuestion) {

  //   AllButtons.addEventListener('click',function(evt) {
  //     // ShowAnswer(,AllQuestion[i].answer,AllQuestion[i].imageOfAnswer)
  //     Question(AllQuestion.question,AllQuestion.points,AllQuestion.image,AllQuestion.audio,AllQuestion.answer,AllQuestion.imageOfAnswer);

  //     StayOfCloseAnswer=0;
  //   })

  // }



// var x = AllQuestion.length, y = 5;

// for (let i=0; i<Math.floor(x/y); i++) {
//   console.log(i)
//   NewRowOfButtons ();
// }



console.log('all fine')