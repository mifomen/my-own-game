
let Themes = [
'html',
'Загадки 1',
'Загадки 2',
'Анаграммы',
'ЭВМ'
]


var ThemesForLoad = [
Themes[0],
Themes[1],
Themes[2],
Themes[3],
Themes[4]
]



// item=document.querySelector('.mifomen');
//   item.innerHTML = ThemesForLoad[0];
var items=document.querySelectorAll('.row .title');
// var item = Array(items);
// console.log(items)
// var LoadThemes = function (item,index) {
//   item.textContent = ThemesForLoad[index]
// }
// console.log(items.length)
// console.log(ThemesForLoad)

for ( let i=0; i<items.length; i++) { //почему не работает....
  items[i].innerHTML = ThemesForLoad[i];
}

// for ( item of items) {
//  items.innerHTML = ThemesForLoad;

// }
// items[0].innerHTML = ThemesForLoad[0];
// items[1].innerHTML = ThemesForLoad[1];
// items[2].innerHTML = ThemesForLoad[2];
// items[3].innerHTML = ThemesForLoad[3];
// items[4].innerHTML = ThemesForLoad[4];


// items[4].innerHTML = "mifomen";
// for (let i=0; i<=items.length; i++) {
//   LoadThemes(items[i],i);
// }

// console.log(ThemesForLoad.length)
// LoadThemes(items[0],0);
// LoadThemes(items[1],1);
// LoadThemes(items[2],2);
// LoadThemes(items[3],3);
// LoadThemes(items[4],4);






let AllQuestion = [
{ //1
  theme:Themes[0], 
  question: 'От какого слова происходит название ХАКЕР (hacker)', 
  image:'https://stihi.ru/pics/2020/03/07/1196.jpg',
  points: 100,
  answer:'работу топором'
},
{ //2
  theme:'html', 
  question: 'Какое наименьшее целое положительное число вы можете написать двумя цифрами', 
  image:'',
  points: 200 
},
{ //3
  theme:'html', 
  question: 'Какой угол составляют между собой стрелки часов? Ответ надо дать посоображению, не пользуясь транспортиром ',
  image:'',
  points: 300 
},
{ //4
  theme:'html', 
  question: 'ENIAC был построен на вакуумных лампах. Сколько ламп было в ENIAC',
  image:'', 
  points: 400 
},
{ //5
  theme:'html', 
  question: 'Он был убит римским воином, когда чертил на песке геометрические фигуры. Ему приписывают крылатую фразу «Дайте мне точку опоры, и я переверну Землю!»', 
  image:'',
  points: 500 
},
{ //6
  theme:'html', 
  question: 'Кай для Снежной Королевы<br>Кресло выложил из льда.<br>Он работал три недели – <br>Кресло вышло хоть куда!<br>Отвечайте поскорей,<br>Сколько Кай потратил дней?', 
  image:'',

  points: 100,
  answer: 21
},
{ //7
  theme:'html', 
  question: 'Эйнштейна однажды спросили, как, по его мнению, появляются изобретения, которые переделывают мир. «Очень просто, - ответил он, - все знают, что сделать это невозможно, но…» ', 
  image:'',
  points: 200,
  answer: 'тэги'
},
{ //8
  theme:'html', 
  question: 'Известный математик Д. Гилберт на лекции в Геттингенском университете сказал как-то: «Перед каждым человеком – определенный горизонт. Иногда он по каким-нибудь причинам уменьшается до бесконечно малой величины, сходясь в точку. Тогда человек говорит: «…»', 
  image:'',
  points: 300 
},
{ //9
  theme:'html', 
  question: 'Каждую ночь человек набирает номер телефона и дожидается, пока на другом конце провода снимут трубку. Ничего не говоря, он кладет трубку и засыпает. В чем дело?', 
  image:'',
  points: 400,
  answer: 'классы \ class'
},
{ //10
  theme:'html', 
  question: 'Джон любил Дженни. Но однажды он, с силой закрыв наружную дверь, услышал странные звуки в комнате. Он вбежал туда и увидел Дженни, которая билась в агонии на полу, залитом водой. Что произошло?', 
  image:'',
  points: 500,
  answer: 'html + css + js' 
},
{ //11
  theme:'загадки', 
  question: 'Шли два отца и два сына, нашли три апельсина. Поделили – всем по одному. Как  так получилось?', 
  image:'',
  points: 100,
  answer: 'шли дед, отец и сын'
},
{ //12
  theme:'загадки', 
  question: 'Что в России на первом месте, а во Франции на втором?', 
  image:'',
  points: 200,
  anwser:' Буква Р'
},
{ //13
  theme:'загадки', 
  question: 'Завязать можно, а развязать нельзя', 
  image:'',
  points: 300,
  answer:'разговор'
},
{ //14
  theme:'загадки', 
  question: 'По какому пути ещё никто никогда не ходил и не ездил?', 
  image:'',
  points: 400,
  answer: 'по млечному'
},
{ //15
  theme:'загадки', 
  question: 'Чем кончаются день и ночь?', 
  image:'',
  points: 500,
  answer: 'мягким знаком'
},
{ //16
  theme:'scratch', 
  question: 'атеткмимаа', 
  image:'',
  points: 100 ,
  answer: 'математика'
},
{ //17
  theme:'scratch', 
  question: 'ригуфа', 
  image:'',
  points: 200,
  answer: 'фигура'
},
{ //18
  theme:'scratch', 
  question: 'ятарпеиц',
  image:'',
  points: 300,
  answer: 'трапеция'
},
{ // 19
  theme:'scratch', 
  question: 'метгрияео',
  image:'',
  points: 400,
  answer: 'геометрия'
},
{ //20
  theme:'scratch', 
  question: 'жеслоние', 
  image:'',
  points: 500,
  answer: 'сложение'
},
{ //21
  theme:'code', 
  question: 'Как называется самая длинная клавиша на клавиатуре персонального компьютера', 
  image:'',
  points: 100,
  answer: 'исполнители, роботы'
},
{ //22
  theme:'code', 
  question: 'Какой вычислительной техникой пользовались счетоводы в середине 20 века?', 
  image:'',
  points: 200,
  answer: 'сценария'
},
{ //23
  theme:'code', 
  question: 'Кот в мешке. Узнает ли себя делимое после деления, если перед делением умножить его на делитель?', 
  image:'',
  points: 300,
  answer: 'код' 
},
{ //24
  theme:'code', 
  question: 'Как называлась счетная доска у древних римлян и греков?', 
  image:'',
  points: 400,
  answer: 'сценария' 
},
{ //25
  theme:'code', 
  question: 'На столе лежат две монеты, в сумме они дают 3 рубля. Одна из них - не 1 рубль. Какие это монеты?', 
  image:'',
  points: 501,
  answer: 'сценария' 
}
]

let NamingForPoints = document.querySelectorAll('.points');
// console.log(NamingForPoints)
for (var  i = 0;i < NamingForPoints.length; i++) {
  NamingForPoints[i].textContent = AllQuestion[i].points;
}