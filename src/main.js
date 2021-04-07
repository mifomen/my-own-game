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


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
  })
};
//
var points = document.querySelectorAll('.points');
var BtnStartGame = document.getElementById("StartGame");

function addScript(src) {
  let elem = document.createElement("script");
  elem.src = src;
  document.body.appendChild(elem);
}

document.addEventListener('DOMContentLoaded',function(evt){
  addScript('questions.js');

})

// include("questions.js");


// BtnStartGame.addEventListener('click',function(evt){
//   document.querySelector('.game').classList.add('hidden');
//   document.querySelector('.Start-One').classList.remove('hidden');
// })
var GameBegin = function (evt) {
  document.querySelector('.game').classList.add('hidden');
  document.querySelector('.Start-One').classList.remove('hidden');
}


var All  = document.querySelectorAll('.points');
All.forEach(function(evt){
  evt.addEventListener('click',function(e) {
    evt.style.opacity="0";
    evt.style.visibility="hidden";
  })
});

var All = document.querySelectorAll('.game .points')
var FirstTheme  = document.querySelectorAll('.one .points')
var SecondTheme = document.querySelectorAll('.two .points')
var ThirdTheme = document.querySelectorAll('.three .points')
var FourTheme  = document.querySelectorAll('.four .points')
var FiveTheme  = document.querySelectorAll('.five .points')

var GetPointsButton = function (FindButton,points,team) {
 var PointsButton = document.getElementById(FindButton);
 PointsButton.addEventListener('click',function (evt) {
  var WhoGetPoints = document.querySelector(team); 
  if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
  WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points)
  PointsButton.disabled = true;
});
};
var NewButton = function(msg,id,parent) {
  var TextArea = document.createElement(parent);
  TextArea.className = "image-output";
  HTMLElement.tabIndex = "1";
  TextArea.id = "Qestion-Delete";




  var SomeButton = document.createElement('button');
  SomeButton.type = 'button';
  SomeButton.id = id;
  SomeButton.textContent = msg;
  parent.appendChild(SomeButton);
}

var Question = function(evt,points,imageSrc) {
  var TextArea = document.createElement('div');
  TextArea.className = "image-output";
  TextArea.id = "Qestion-Delete";

  var TextOfQuestion = document.createElement('h1');
  TextOfQuestion.textContent = evt;
  TextOfQuestion.className = 'Text-Qestion'
  TextArea.appendChild(TextOfQuestion);

  if ( imageSrc !== '' ) {
let ImageOfQuestion = document.createElement('img');
ImageOfQuestion.className = 'Image-Of-Question';
ImageOfQuestion.src=imageSrc;
TextArea.appendChild(ImageOfQuestion);
} else { } 


  var TextCloseButton = document.createElement('span');
  TextCloseButton.className = 'TextCloseButton';
  TextCloseButton.innerHTML = 'крест';
  // TextCloseButton.Click = testDiologDelete();
  TextCloseButton.textContent = 'крест';
  TextArea.appendChild(TextCloseButton);

  var LeftButton = document.createElement('button');
  LeftButton.type = 'button';
  LeftButton.id = "Left-Button";
  LeftButton.textContent = "очки синим"
  TextArea.appendChild(LeftButton);

  var RightBUtton = document.createElement('button');
  RightBUtton.type = 'button';
  RightBUtton.id = "Right-Button";
  RightBUtton.textContent = "очки красным"
  TextArea.appendChild(RightBUtton);

  document.body.appendChild(TextArea);

 document.querySelector('.TextCloseButton').addEventListener('click',function (evt) {

 let elem1 = document.getElementById('Qestion-Delete');
    if (elem1) {elem1.parentNode.removeChild(elem1)}

 });

//   PointsButton.addEventListener('click',function (evt) {
//   var WhoGetPoints = document.querySelector(team); 
//   if (WhoGetPoints.textContent==='0') WhoGetPoints.textContent=0;
//   WhoGetPoints.textContent = Number(WhoGetPoints.textContent) + Number(points)
//   PointsButton.disabled = true;
// });

  GetPointsButton('Left-Button',points,'.blue');
  GetPointsButton('Right-Button',points,'.red');
}


let ESC_KEY_CODE=27;
let ENTER_KEY_CODE=13;
let TAB_KEY_CODE=9;
let PAGEUP_KEY_CODE=33;
let PAGEDOWN_KEY_CODE=34;

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

document.onkeydown  = function(evt) {
  if (evt.keyCode == ESC_KEY_CODE || evt.keyCode == ENTER_KEY_CODE  || evt.keyCode == PAGEUP_KEY_CODE || evt.keyCode == PAGEDOWN_KEY_CODE) {
    var elem = document.getElementById('Qestion-Delete');
    if (elem) {elem.parentNode.removeChild(elem)}
  }
}

  // var TimeMassive = [];
  // TimeMassive = Array.from (FindAllTags);
  // TimeMassive.forEach(function (it) {

  //   return it.style.cssText = it.style.cssText.replace('font-size: ' + localStorage["LocalProperty0"],'');
  //   // it.style.cssText.replace(f,'');
  // })

  var ArrayOfQuestions = [];
  ArrayOfQuestions = Array.from (All);

  // ArrayOfQuestions.forEach(function (it) {

  // })
let AllButtons = document.querySelectorAll('.points');
// console.log(AllButtons)

for (let i=0; i<AllButtons.length; i++) {

  AllButtons[i].addEventListener('click',function(evt) {
    Question(AllQuestion[i].question,AllQuestion[i].points,AllQuestion[i].image);
  })
  
}

// for (let i=0; i<FirstTheme.length; i++) {

//   FirstTheme[i].addEventListener('click',function(evt) {
//     Question(AllQuestion[i].question,AllQuestion[i].points,AllQuestion[i].image);
//   })
//     SecondTheme[i].addEventListener('click',function(evt) {
//     Question(AllQuestion[i+5].question,AllQuestion[i+5].points,AllQuestion[i+5].image);
//   })
//       ThirdTheme[i].addEventListener('click',function(evt) {
//     Question(AllQuestion[i+10].question,AllQuestion[i+10].points,AllQuestion[i+10].image);
//   })
//        FourTheme[i].addEventListener('click',function(evt) {
//     Question(AllQuestion[i+15].question,AllQuestion[i+15].points,AllQuestion[i+15].image);
//   })
//  FiveTheme[i].addEventListener('click',function(evt) {
//     Question(AllQuestion[i+20].question,AllQuestion[i+20].points,AllQuestion[i+20].image);
//   })

// }

  console.log('all fine')