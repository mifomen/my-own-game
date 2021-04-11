
let Themes = [
'Формулы',
'Толкование',
'Единицы измерения',
'Анаграммы',
'Всего понемногу'
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
  question: 'Запишите формулу корней квадратного уравнения',
  image:'', //https://stihi.ru/pics/2020/03/07/1196.jpg
  audio:'', 
  points: 100,
  imageOfAnswer:'https://puu.sh/HxnXR/a0722e01cb.png',
  answer:''
},
{ //2
  theme:Themes[0], 
  question: 'Запишите формулы  суммы и разности кубов двух чисел', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'https://puu.sh/HxnZt/ea7b582442.png',
  answer:''
},
{ //3
  theme:Themes[0], 
  question: 'Запишите формулу Герона для вычисления площади треугольника',
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'https://puu.sh/Hxo01/0389edfbef.png',
  answer:''
},
{ //4
  theme:Themes[0], 
  question: 'Запишите основное тригонометрическое тождество',
  image:'',
  audio:'', 
  points: 400,
  imageOfAnswer:'https://puu.sh/Hxo0x/14aabb25f1.png',
  answer:''
},
{ //5
  theme:Themes[0], 
  question: 'Запишите формулу куба суммы двух чисел', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'https://puu.sh/Hxo1o/74564c2d8d.png',
  answer:''
},
{ //6
  theme:Themes[1], 
  question: 'ТРАПЕЦИЯ', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'',
  answer: 'ТРАПЕЦИЯ происходит от латинского слова  «трапезиум» -столик'
},
{ //7
  theme:Themes[1], 
  question: 'КОНУС', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'КОНУС – это латинская форма греческого слова  «конос», что означает сосновую  шишку.'
},
{ //8
  theme:Themes[1], 
  question: 'АКСИОМА', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer:'АКСИОМА  (от греч. axioma — значимое, принятое положение) — исходное, принимаемое без доказательства положение к.-л. теории, лежащее в основе доказательств др. ее положений.'
},
{ //9
  theme:Themes[1], 
  question: 'ГИПОТЕНУЗА', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'ГИПОТЕНУЗА - от греческого слова "гипотенуза", что означает "тянущаяся под чем-либо"',
  answer: '100'
},
{ //10
  theme:Themes[1], 
  question: ' РАДИКАЛ ', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: 'РАДИКАЛ знак математического действия извлечения корня, также результат такого действия' 
},
{ //11
  theme: Themes[2], 
  question: 'Какую часть составляет 1 ар от гектара?', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'https://puu.sh/Hxo90/18e694c630.png',
  answer: ''
},
{ //12
  theme: Themes[2], 
  question: 'Что такое баррель? Чему он равен? ', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer:'Известно, что баррель единица измерения объёма нефти.  Нефтяной баррель равен 158,988 куб. дм. '
},
{ //13
  theme: Themes[2],
  question: ' В некоторых зарубежных магазинах говорят: " Отпустите, пожалуйста, тридцать декаграммов сыра".  Сколько это граммов?', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'https://puu.sh/Hxoc8/ad94803977.png',
  answer:''
},
{ //14
  theme: Themes[2],
  question: 'Назовите любые  три старинные русские единицы измерения длины.', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'аршин, верста, пядь, локоть, вершок'
},
{ //15
  theme: Themes[2],
  question: 'Сколько литров воды в 1 куб.дециметре?', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: '1 литр'
},
{ //16
  theme: Themes[3],
  question: 'Математику уже затем учить надо, что она ум в порядок приводит.', 
  image:'',
  audio:'',
  points: 100 ,
  imageOfAnswer:'',
  answer: 'М.В. Ломоносов'
},
{ //17
  theme:Themes[3],
  question: 'Математика – царица наук, <br> арифметика – царица математики', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'К.Ф. Гаусс'
},
{ //18
  theme:Themes[3], 
  question: 'Вдохновение нужно в геометрии не меньше, чем в поэзии.',
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer: 'А.С. Пушкин'
},
{ // 19
  theme:Themes[3], 
  question: 'Именно математика дает<br> надежнейшие правила: кто им следует – тому<br> не опасен обман чувств',
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'Л. Эйлер'
},
{ //20
  theme:Themes[3],
  question: 'Предмет математики столь серьезен, что не следует  упускать ни одной возможности сделать его более занимательным.', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: 'Б. Паскаль'
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
{ //24
  theme:Themes[4],
  question: 'Как называлась счетная доска у древних римлян и греков?', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'абак' 
},
{ //25
  theme:Themes[4],
  question: 'Один оборот вокруг Земли спутник делает за 1 ч 40 минут, а другой оборот - за 100 минут. Как это может быть?', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: ': 1 ч 40 мин = 100 мин.' 
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

// console.log(AllQuestion)