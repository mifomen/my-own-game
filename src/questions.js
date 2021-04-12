

// var ThemesObj = [
// {
//   name:'Всего понемногу',
//   id:1
// },
// {
//   name:'Задачи в стихах',
//   id:2
// },
// {
//   name:'Загадки',
//   id:3
// },
// {
//   name:'М+И+Ф',
//   id:4
// },
// {
//   name:'Анаграммы',
//   id:5
// }
// ]

var Themes = [
'Всего понемногу',
'Задачи в стихах',
'Загадки',
'М+И+Ф',
'Анаграммы'
]
function compareNumeric1(a, b) {
  if (a.theme < b.theme) return -1
    if (a.theme > b.theme) return 1 
      return 0;
  }

  // ThemesObj.sort(compareNumeric1);
console.log(Themes)
Themes.sort();
console.log(Themes)
// ThemesObj.sort(function(a, b) {
//   if (a.name > b.name) return 1
//     if (a.name < b.name) return -1 
//       return 0
//   })
// ThemesObj.sort(compareNumeric)
// Themes.sort( (a, b) => a - b )
// console.log(ThemesObj)


var AllQuestion = [
{ //1
  theme: Themes[0], 
  question: 'От какого слова происходит название ХАКЕР (hacker)',
  image:'', //https://stihi.ru/pics/2020/03/07/1196.jpg
  audio:'', 
  points: 301,
  imageOfAnswer:'',
  answer:'Русское слово хакер произошло от английского hacker = английский глагол to hack (рубить, кромсать) + er (суффикс для образования производителя действия). Первоначально хакерами называли программистов, которые исправляли ошибки в ПО каким-либо быстрым, но не всегда корректным способом'
},
{ //2
  theme:Themes[0], 
  question: 'Какое наименьшее целое положительное число вы можете написать двумя цифрами', 
  image:'',
  audio:'',
  points: 250,
  imageOfAnswer:'',
  answer:'1/1 2/2 3/3 … 9/9 или 10 20 30 40 … 90'
},
{ //3
  theme:Themes[0], 
  question: 'Какой угол составляют между собой стрелки часов? Ответ нужно  дать не пользуясь транспортиром ',
  image:'https://puu.sh/HxhhW/c274013cc2.png',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer:'1'
},
{ //4
  theme:Themes[0], 
  question: 'ENIAC был построен на вакуумных лампах. Сколько ламп было в ENIAC',
  image:'',
  audio:'', 
  points: 400,
  imageOfAnswer:'https://puu.sh/HxhmX/5937250f65.png',
  answer:'В нем было 17000 ламп'
},
{ //5
  theme:Themes[0], 
  question: 'Он был убит римским воином, когда чертил на песке геометрические фигуры. Ему приписывают крылатую фразу «Дайте мне точку опоры, и я переверну Землю!»', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer:'Архимед (21 год до н.э.)'
},
{ //6
  theme:Themes[1], 
  question: 'Кай для Снежной Королевы<br>Кресло выложил из льда.<br>Он работал три недели – <br>Кресло вышло хоть куда!<br>Отвечайте поскорей,<br>Сколько Кай потратил дней?', 
  image:'',
  audio:'',
  points: 201,
  imageOfAnswer:'',
  answer: 21
},
{ //7
  theme:Themes[1],   
  question: 'Джин в бутылке сидит,<br>Горько плачет и грустит:<br>«Здесь уже я триста лет,<br>И на волю хода нет!»<br>Будет ваш ответ каков,<br>Если через семь веков<br>Джина выпустит мой дед,<br>Сколько Джину будет лет?', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: '1000'
},
{ //8
  theme:Themes[1],   
  question: 'Три маленьких гнома трудились, устали:<br>Книги волшебные переплетали.<br>Сели гномы отдыхать,<br>Самый младший стал считать.<br>Насчитал он всего<br>По тридцать штук на каждого,<br>Десять книг в остатке.<br>Сколько всего книг, ребятки?', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer:'100'
},
{ //9
  theme:Themes[1],  
  question: 'Сто двадцать Бабок-Ежек<br>Пустились в перелет.<br>Двадцать в своих ступах<br>Вырвались вперед.<br>Вы, наверно, догадались,<br>Сколько позади осталось?', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: '100'
},
{ //10
  theme:Themes[1],  
  question: 'Винни-Пух и Пятачок<br>Сладкого меду набрали бачок.<br>Пчелы разозлились,<br>Догонять пустились.<br>Покусали Пятачка<br>Десять пчелочек слегка.<br>Но досталось Винни –<br>В него сто сорок впились.<br>Ответьте, дети, поскорей,<br>Сколько пчел покусало друзей?', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: '210 или 150' 
},
{ //11
  theme:Themes[2],  
  question: 'Часть плоскости, ограниченная окружностью.', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'',
  answer: 'круг'
},
{ //12
  theme:Themes[2], 
  question: 'В древности такого термина не было. Его ввел в 17 веке французский математик Франсуа Виет, в переводе с латинского он означает «спица колеса». Что это?', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer:'радиус'
},
{ //13
  theme:Themes[2], 
  question: 'Чтоб окружность верно счесть<br>Надо только постараться<br>И запомнить все как есть:<br>Три – четырнадцать – пятнадцать –<br>Девяносто два и шесть.<br>О чем речь?', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer:'число пи'
},
{ //14
  theme:Themes[2],  
  question: 'Кот в мешке.<br>Слово, которым обозначается это понятие, в переводе с греческого означает «натянутая тетива»', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'гипотенуза'
},
{ //15
  theme:Themes[2], 
  question: 'В вавилонских табличках это число изображалось в виде сдвоенного угла Индийцы называли его словом «сунья» (пустое), арабы перевели его соответствующим словом «ас-сыфр».', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: 'ноль'
},
{ //16
  theme:Themes[3], 
  question: 'атеткмимаа', 
  image:'',
  audio:'',
  points: 100 ,
  imageOfAnswer:'',
  answer: 'математика'
},
{ //17
  theme:Themes[3],  
  question: 'ригуфа', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'фигура'
},
{ //18
  theme:Themes[3], 
  question: 'ятарпеиц',
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer: 'трапеция'
},
{ // 19
  theme:Themes[3],  
  question: 'метгрияео',
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'геометрия'
},
{ //20
  theme:Themes[3], 
  question: 'жеслоние', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: 'сложение'
},
{ //21
  theme:Themes[4],
  question: 'Как называется самая длинная клавиша на клавиатуре персонального компьютера', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'',
  answer: 'пробел'
},
{ //22
  theme:Themes[4], 
  question: 'Какой вычислительной техникой пользовались счетоводы в середине 20 века?', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'счёты, арифмометр, логарифмическая линейка.'
},
{ //23
  theme:Themes[4],
  question: 'Кот в мешке. Узнает ли себя делимое после деления, если перед делением умножить его на делитель?', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer: 'да' 
},
{ //25
  theme:Themes[4], 
  question: 'Один оборот вокруг Земли спутник делает за 1 ч 40 минут, а другой оборот - за 100 минут. Как это может быть?', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: ': 1 ч 40 мин = 100 мин.' 
},
{ //24
  theme:Themes[4], 
  question: 'Как называлась счетная доска у древних римлян и греков?', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'абак' 
}
]

// console.log(AllQuestion.length)
localStorage.setItem('NumberInRow', 5);
localStorage.setItem('length', AllQuestion.length);


function compareNumeric(a, b) {
  if (a.theme < b.theme) return -1
    if (a.theme > b.theme) return 1 
      if ( a.points > b.points) return 1;
    if ( a.points < b.points) return -1;
  // if (a.theme ==  b.theme || a.points == b.points) return 0;
  // if (a.theme == b.theme || a.points < b.points)  return 1;
  return 0
}



// for ( let i=0; i<items.length; i++) {
//   items[i].innerHTML = ThemesForLoad[i];
// }

// let arr = [ 17, 2, 15 ];

// метод сортирует содержимое arr
console.log(AllQuestion)
// AllQuestion.sort((prev, next) => prev.points - next.points );
AllQuestion.sort(compareNumeric);
console.log(AllQuestion)
// console.log( arr );  // 1, 15, 2

for ( let i = 0; i < Themes.length; i++) {

AllQuestion[i].theme = Themes[i];
AllQuestion[i+1].theme = Themes[i];
AllQuestion[i+2].theme = Themes[i];
AllQuestion[i+3].theme = Themes[i];
AllQuestion[i+4].theme = Themes[i];

}
let items = document.querySelectorAll('.title-theme');
// console.log(items)

for ( let i = 0; i < items.length; i++) {
  items[i].textContent = Themes[i];

}


let NamingForPoints = document.querySelectorAll('.points');
for (let  j = 0; j < NamingForPoints.length; j++) {
  NamingForPoints[j].textContent = AllQuestion[j].points;
}
//test mifomen

for ( let i=0; i<5; i++) {
  for ( let j=0; j<AllQuestion.length; j++) {
    AllQuestion[i].theme = Themes[j]
  }
}

console.log(AllQuestion)