
let Themes = [
'html',
'Задачи в стихах',
'Загадки',
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

for ( let i=0; i<items.length; i++) {
  items[i].innerHTML = ThemesForLoad[i];
}

let AllQuestion = [
{ //1
  theme:Themes[0], 
  question: 'От какого слова происходит название ХАКЕР (hacker)',
  image:'', 
//  image:'11https://stihi.ru/pics/2020/03/07/1196.jpg',
points: 100,
answer:'работу топором'
},
{ //2
  theme:Themes[0], 
  question: 'Какое наименьшее целое положительное число вы можете написать двумя цифрами', 
  image:'',
  points: 200 
},
{ //3
  theme:Themes[0], 
  question: 'Какой угол составляют между собой стрелки часов? Ответ надо дать посоображению, не пользуясь транспортиром ',
  image:'',
  points: 300 
},
{ //4
  theme:Themes[0], 
  question: 'ENIAC был построен на вакуумных лампах. Сколько ламп было в ENIAC',
  image:'', 
  points: 400 
},
{ //5
  theme:Themes[0], 
  question: 'Он был убит римским воином, когда чертил на песке геометрические фигуры. Ему приписывают крылатую фразу «Дайте мне точку опоры, и я переверну Землю!»', 
  image:'',
  points: 500 
},
{ //6
  theme:Themes[1], 
  question: 'Кай для Снежной Королевы<br>Кресло выложил из льда.<br>Он работал три недели – <br>Кресло вышло хоть куда!<br>Отвечайте поскорей,<br>Сколько Кай потратил дней?', 
  image:'',

  points: 100,
  answer: 21
},
{ //7
  theme:'html', 
  question: 'Джин в бутылке сидит,<br>Горько плачет и грустит:<br>«Здесь уже я триста лет,<br>И на волю хода нет!»<br>Будет ваш ответ каков,<br>Если через семь веков<br>Джина выпустит мой дед,<br>Сколько Джину будет лет?', 
  image:'',
  points: 200,
  answer: '1000'
},
{ //8
  theme:'html', 
  question: 'Три маленьких гнома трудились, устали:<br>Книги волшебные переплетали.<br>Сели гномы отдыхать,<br>Самый младший стал считать.<br>Насчитал он всего<br>По тридцать штук на каждого,<br>Десять книг в остатке.<br>Сколько всего книг, ребятки?', 
  image:'',
  points: 300 
},
{ //9
  theme:'html', 
  question: 'Сто двадцать Бабок-Ежек<br>Пустились в перелет.<br>Двадцать в своих ступах<br>Вырвались вперед.<br>Вы, наверно, догадались,<br>Сколько позади осталось?', 
  image:'',
  points: 400,
  answer: 'классы \ class'
},
{ //10
  theme:'html', 
  question: 'Винни-Пух и Пятачок<br>Сладкого меду набрали бачок.<br>Пчелы разозлились,<br>Догонять пустились.<br>Покусали Пятачка<br>Десять пчелочек слегка.<br>Но досталось Винни –<br>В него сто сорок впились.<br>Ответьте, дети, поскорей,<br>Сколько пчел покусало друзей?', 
  image:'',
  points: 500,
  answer: 'html + css + js' 
},
{ //11
  theme:'загадки', 
  question: 'Часть плоскости, ограниченная окружностью.', 
  image:'',
  points: 100,
  answer: 'круг'
},
{ //12
  theme:'загадки', 
  question: 'В древности такого термина не было. Его ввел в 17 веке французский математик Франсуа Виет, в переводе с латинского он означает «спица колеса». Что это?', 
  image:'',
  points: 200,
  anwser:'радиус'
},
{ //13
  theme:'загадки', 
  question: 'Чтоб окружность верно счесть<br>Надо только постараться<br>И запомнить все как есть:<br>Три – четырнадцать – пятнадцать –<br>Девяносто два и шесть.<br>О чем речь?', 
  image:'',
  points: 300,
  answer:'число пи'
},
{ //14
  theme:'загадки', 
  question: 'Кот в мешке.<br>Слово, которым обозначается это понятие, в переводе с греческого означает «натянутая тетива»', 
  image:'',
  points: 400,
  answer: 'гипотенуза'
},
{ //15
  theme:'загадки', 
  question: 'В вавилонских табличках это число изображалось в виде сдвоенного угла Индийцы называли его словом «сунья» (пустое), арабы перевели его соответствующим словом «ас-сыфр».', 
  image:'',
  points: 500,
  answer: 'ноль'
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


for ( let i=0; i<5; i++) {
  


  for ( let j=0; j<AllQuestion.length; j++) {
AllQuestion[i].theme = Themes[j]
  }

}

console.log(AllQuestion)