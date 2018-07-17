// var Start = function ('DOMContentLoaded',function(e){
//  document.getElementById('Start').classList.remove('hidden')

// })
 document.getElementById('Start').classList.remove('hidden')


var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
  })
};

var points = document.querySelectorAll('.points');
// console.log(points);
var BtnStartGame = document.getElementById("StartGame");
// console.log(BtnStartGame)

StartGame. addEventListener('click',function(evt){
document.querySelector('.game').classList.add('hidden');
document.querySelector('.Start-One').classList.remove('hidden');
})

var All  = document.querySelectorAll('.points');
All.forEach(function(evt){
evt.addEventListener('click',function(e) {
  evt.style.opacity="0";
  evt.style.visibility="hidden";

})

});

var FirstTheme  = document.querySelectorAll('.one .points')
var SecondTheme  = document.querySelectorAll('.two .points')
var ThirdTheme  = document.querySelectorAll('.three .points')
var FourTheme  = document.querySelectorAll('.four .points')
var FiveTheme  = document.querySelectorAll('.five .points')



var Question = function(evt,points) {
  var TextArea = document.createElement('div');
  TextArea.className = "image-output";
  TextArea.id = "Qestion-Delete";
     var h = document.createElement('h1');
     h.textContent = evt;
     h.className = 'Text-Qestion'
     TextArea.appendChild(h);
   var LeftButton = document.createElement('button');
   LeftButton.type = 'button';
   LeftButton.id = "Left-Button";
   LeftButton.textContent = "Дать очки синим!"
   TextArea.appendChild(LeftButton);

   var RightBUtton = document.createElement('button');
   RightBUtton.type = 'button';
   RightBUtton.id = "Right-Button";
   RightBUtton.textContent = "Дать очки красным!"
   TextArea.appendChild(RightBUtton);

 document.body.appendChild(TextArea);

 var GetPointsBlue = document.getElementById('Left-Button');
 GetPointsBlue.addEventListener('click',function (evt) {
  GetPointsToBlueTeam(points);
  GetPointsBlue.disabled = true;
})
 var GetPointsRed = document.getElementById('Right-Button');
 GetPointsRed.addEventListener('click',function (evt) {
  GetPointsToRedTeam(points)
  GetPointsRed.disabled = true;
})

}
 var ESC_KEY_CODE=27;
 document.onkeydown  = function(evt) {
  if (evt.keyCode == ESC_KEY_CODE) {
    RemoveElementInDom('Qestion-Delete');
  }
}

var RemoveElementInDom = function(evt) {
  var elem = document.getElementById(evt);
  if (elem) {elem.parentNode.removeChild(elem)}
}

var GetPointsToBlueTeam = function(points) {
  var ToGet = document.querySelector('.blue'); 
  // if (ToGet.textContent==='0') {alert('asdasd')}
  if (ToGet.textContent==='0') ToGet.textContent=0;
  ToGet.textContent = Number(ToGet.textContent) + Number(points)
}

var GetPointsToRedTeam = function(points) {
  var ToGet = document.querySelector('.red'); 
  if (ToGet.textContent==='0') ToGet.textContent=0;
  ToGet.textContent = Number(ToGet.textContent) + Number(points)
}
FirstTheme[0].addEventListener('click',function(evt) {
  var q = 'Как расшифровать http?';
  Question(q,5);
})
FirstTheme[1].addEventListener('click',function(evt) {
  var q = 'Что на самом деле происходит, когда вы вводите в браузере адрес сайта и нажимаете Enter? ';
  Question(q,10);
})
FirstTheme[2].addEventListener('click',function(evt) {
  var q = 'Где "живут" сайты?';
  Question(q,15);
})
FirstTheme[3].addEventListener('click',function(evt) {
  var q = '«Доехать» от сервера до сервера можно по ? почему можно доехать?';
  Question(q,20);
})
FirstTheme[4].addEventListener('click',function(evt) {
  var q = 'При помощи службы браузер узнает на какой сайт хочет перейти пользователь';
  Question(q,25);
})


SecondTheme[0].addEventListener('click',function(evt) {
  var q = 'Все его называют "питоном", но правильно его называть?';
  Question(q,5);
})
SecondTheme[1].addEventListener('click',function(evt) {
  var q = 'Язык программирования Python назвали в честь английской ...  \n Какой?';
  Question(q,10);
})
SecondTheme[2].addEventListener('click',function(evt) {
  var q = 'Чтобы отслеживать какие-то сбытия надо повесить...  что надо повесить?';
  Question(q,15);
})
SecondTheme[3].addEventListener('click',function(evt) {
  var q = 'Именно эта логическая единица используется, чтобы у программы был выбор';
  Question(q,20);
})
SecondTheme[4].addEventListener('click',function(evt) {
  var q = 'почему python популярен сейчас?';
  Question(q,25);
})

ThirdTheme[0].addEventListener('click',function(evt) {
  var q = 'Чтобы браузер красиво показывал материал на сайте, нужно использовать?';
  Question(q,5);
})
ThirdTheme[1].addEventListener('click',function(evt) {
  var q = 'В интернете компьютеры обмениваются? ';
  Question(q,10);
})
ThirdTheme[2].addEventListener('click',function(evt) {
  var q = 'Какая служба доставки пакетов испльзуется в "Сети" ?';
  Question(q,15);
})
ThirdTheme[3].addEventListener('click',function(evt) {
  var q = 'Как браузер собирается сайт?';
  Question(q,20);
})
ThirdTheme[4].addEventListener('click',function(evt) {
  var q = 'Для создания сайта достаточной 3-х ключевых людей, назоваите их должности';
  Question(q,25);
})

FourTheme[0].addEventListener('click',function(evt) {
  var q = 'Каждому элемента scratch\'a можно задать свое поведение? ';
  Question(q,5);
})
FourTheme[1].addEventListener('click',function(evt) {
  var q = 'Почему создатели назвали его именно scratch?';
  Question(q,10);
})
FourTheme[2].addEventListener('click',function(evt) {
  var q = 'Самый знаменитый персонаж scratch это ?';
  Question(q,15);
})
FourTheme[3].addEventListener('click',function(evt) {
  var q = 'почему scratch стали считать языком программирования?';
  Question(q,20);
})
FourTheme[4].addEventListener('click',function(evt) {
  var q = 'какое свойство надо добавлять событию, чтобы потом можно было работать с клавишами и не нажимать по несколько раз сам этот флажок?';
  Question(q,25);
})


FiveTheme[0].addEventListener('click',function(evt) {
  var q = 'css существуется для?';
  Question(q,5);
})
FiveTheme[1].addEventListener('click',function(evt) {
  var q = 'Чтобы придаться объекту оформление нужно?';
  Question(q,10);
})
FiveTheme[2].addEventListener('click',function(evt) {
  var q = 'Какое свойство мы использовали для смены картинок?';
  Question(q,15);
})
FiveTheme[3].addEventListener('click',function(evt) {
  var q = 'При помощи какой технологии строиться цвет элемента?';
  Question(q,20);
})
FiveTheme[4].addEventListener('click',function(evt) {
  var q = 'Каким свойством можно задать задний фон элемента?';
  Question(q,25);
})

console.log('all fine')