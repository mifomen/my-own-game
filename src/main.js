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
  var elem = document.createElement("script");
  elem.src = src;
  document.body.appendChild(elem);
}

document.addEventListener('DOMContentLoaded',function(evt){
  addScript('questions.js');

})


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
  var TextOfQuestion = document.createElement('h1');
  TextOfQuestion.textContent = msg;
  TextOfQuestion.className = 'Text-Qestion'
  TextArea.appendChild(TextOfQuestion);

   var SomeButton = document.createElement('button');
   SomeButton.type = 'button';
   SomeButton.id = id;
   SomeButton.textContent = msg;
   parent.appendChild(SomeButton);
}

var Question = function(evt,points) {
  var TextArea = document.createElement('div');
  TextArea.className = "image-output";
  TextArea.id = "Qestion-Delete";
     var TextOfQuestion = document.createElement('h1');
     TextOfQuestion.textContent = evt;
     TextOfQuestion.className = 'Text-Qestion'
     TextArea.appendChild(TextOfQuestion);

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

GetPointsButton('Left-Button',points,'.blue');
GetPointsButton('Right-Button',points,'.red');
}


let ESC_KEY_CODE=27;
let ENTER_KEY_CODE=13;
let TAB_KEY_CODE=9;
let PAGEUP_KEY_CODE=33;
let PAGEDOWN_KEY_CODE=34;



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

FirstTheme[0].addEventListener('click',function(evt) {
  Question(AllQuestion[0].question,AllQuestion[0].points);
})
FirstTheme[1].addEventListener('click',function(evt) {
  Question(AllQuestion[1].question,AllQuestion[1].points);
})
FirstTheme[2].addEventListener('click',function(evt) {
  Question(AllQuestion[2].question,AllQuestion[2].points);
})
FirstTheme[3].addEventListener('click',function(evt) {
  Question(AllQuestion[3].question,AllQuestion[3].points);
})
FirstTheme[4].addEventListener('click',function(evt) {
  Question(AllQuestion[4].question,AllQuestion[4].points);
})


SecondTheme[0].addEventListener('click',function(evt) {
  Question(AllQuestion[5].question,AllQuestion[5].points);
})
SecondTheme[1].addEventListener('click',function(evt) {
  Question(AllQuestion[6].question,AllQuestion[6].points);
})
SecondTheme[2].addEventListener('click',function(evt) {
  Question(AllQuestion[7].question,AllQuestion[7].points);
})
SecondTheme[3].addEventListener('click',function(evt) {
  Question(AllQuestion[8].question,AllQuestion[8].points);
})
SecondTheme[4].addEventListener('click',function(evt) {
   Question(AllQuestion[9].question,AllQuestion[9].points);
})

ThirdTheme[0].addEventListener('click',function(evt) {
  Question(AllQuestion[10].question,AllQuestion[10].points);
})
ThirdTheme[1].addEventListener('click',function(evt) {
  Question(AllQuestion[11].question,AllQuestion[11].points);
})
ThirdTheme[2].addEventListener('click',function(evt) {
  Question(AllQuestion[12].question,AllQuestion[12].points);
})
ThirdTheme[3].addEventListener('click',function(evt) {
  Question(AllQuestion[13].question,AllQuestion[13].points);
})
ThirdTheme[4].addEventListener('click',function(evt) {
  Question(AllQuestion[14].question,AllQuestion[14].points);
})

FourTheme[0].addEventListener('click',function(evt) {
  Question(AllQuestion[15].question,AllQuestion[15].points);
})
FourTheme[1].addEventListener('click',function(evt) {
  Question(AllQuestion[16].question,AllQuestion[16].points);
})
FourTheme[2].addEventListener('click',function(evt) {
  Question(AllQuestion[17].question,AllQuestion[17].points);
})
FourTheme[3].addEventListener('click',function(evt) {
  Question(AllQuestion[18].question,AllQuestion[18].points);
})
FourTheme[4].addEventListener('click',function(evt) {
  Question(AllQuestion[19].question,AllQuestion[19].points);
})

FiveTheme[0].addEventListener('click',function(evt) {
  Question(AllQuestion[20].question,AllQuestion[20].points);
})
FiveTheme[1].addEventListener('click',function(evt) {
  Question(AllQuestion[21].question,AllQuestion[21].points);
})
FiveTheme[2].addEventListener('click',function(evt) {
  Question(AllQuestion[22].question,AllQuestion[22].points);
})
FiveTheme[3].addEventListener('click',function(evt) {
  Question(AllQuestion[23].question,AllQuestion[23].points);
})
FiveTheme[4].addEventListener('click',function(evt) {
  Question(AllQuestion[24].question,AllQuestion[24].points);
})
console.log('all fine')


