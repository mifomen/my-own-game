var Themes = [
"Формулы", //0
"Толкование", //1
"Единицы измерения", //2
"Крылатые фразы", //3
"Великие математики", //4
"Вычислительная техника",  //5
"Математические развлечения",//6
"Шарады" //7
]
// for (theme of Themes) {
//   console.log(theme)
// }
// console.log(Themes)
// Themes.sort();
// console.log(Themes)
// function compareNumeric1(a, b) {
//   if (a.theme < b.theme) return -1
//     if (a.theme > b.theme) return 1 
//       return 0;
//   }

//   // ThemesObj.sort(compareNumeric1);

// ThemesObj.sort(function(a, b) {
//   if (a.name > b.name) return 1
//     if (a.name < b.name) return -1 
//       return 0
//   })
// ThemesObj.sort(compareNumeric)
// Themes.sort( (a, b) => a - b )
// console.log(ThemesObj)


let AllQuestion = [{
  theme: Themes[0],
  question: "Запишите формулу корней квадратного уравнения",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "https://puu.sh/HxnXR/a0722e01cb.png",
  answer: ""
}, {
  theme: Themes[0],
  question: "Запишите формулы  суммы и разности кубов двух чисел",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "https://puu.sh/HxnZt/ea7b582442.png",
  answer: ""
}, {
  theme: Themes[0],
  question: "Запишите формулу Герона для вычисления площади треугольника",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "https://puu.sh/Hxo01/0389edfbef.png",
  answer: ""
}, {
  theme: Themes[0],
  question: "Запишите основное тригонометрическое тождество",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "https://puu.sh/Hxo0x/14aabb25f1.png",
  answer: ""
}, {
  theme: Themes[0],
  question: "Запишите формулу куба суммы двух чисел",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "https://puu.sh/Hxo1o/74564c2d8d.png",
  answer: ""
}, {
  theme: Themes[1],
  question: "ТРАПЕЦИЯ",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "",
  answer: "ТРАПЕЦИЯ происходит от латинского слова  «трапезиум» -столик"
}, {
  theme: Themes[1],
  question: "КОНУС",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "",
  answer: "КОНУС – это латинская форма греческого слова  «конос», что означает сосновую  шишку."
}, {
  theme: Themes[1],
  question: "АКСИОМА",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "",
  answer: "АКСИОМА  (от греч. axioma — значимое, принятое положение) — исходное, принимаемое без доказательства положение к.-л. теории, лежащее в основе доказательств др. ее положений."
}, {
  theme: Themes[1],
  question: "ГИПОТЕНУЗА",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: 'ГИПОТЕНУЗА - от греческого слова "гипотенуза", что означает "тянущаяся под чем-либо"',
  answer: "100"
}, {
  theme: Themes[1],
  question: " РАДИКАЛ ",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "",
  answer: "РАДИКАЛ знак математического действия извлечения корня, также результат такого действия"
}, {
  theme: Themes[2],
  question: "Какую часть составляет 1 ар от гектара?",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "https://puu.sh/Hxo90/18e694c630.png",
  answer: ""
}, {
  theme: Themes[2],
  question: "Что такое баррель? Чему он равен? ",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "",
  answer: "Известно, что баррель единица измерения объёма нефти.  Нефтяной баррель равен 158,988 куб. дм. "
}, {
  theme: Themes[2],
  question: ' В некоторых зарубежных магазинах говорят: " Отпустите, пожалуйста, тридцать декаграммов сыра".  Сколько это граммов?',
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "https://puu.sh/Hxoc8/ad94803977.png",
  answer: ""
}, {
  theme: Themes[2],
  question: "Назовите любые  три старинные русские единицы измерения длины.",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "",
  answer: "аршин, верста, пядь, локоть, вершок"
}, {
  theme: Themes[2],
  question: "Сколько литров воды в 1 куб.дециметре?",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "",
  answer: "1 литр"
}, {
  theme: Themes[3],
  question: "Математику уже затем учить надо, что она ум в порядок приводит.",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "",
  answer: "М.В. Ломоносов"
}, {
  theme: Themes[3],
  question: "Математика – царица наук, <br> арифметика – царица математики",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "",
  answer: "К.Ф. Гаусс"
}, {
  theme: Themes[3],
  question: "Вдохновение нужно в геометрии не меньше, чем в поэзии.",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "",
  answer: "А.С. Пушкин"
}, {
  theme: Themes[3],
  question: "Именно математика дает<br> надежнейшие правила: кто им следует – тому<br> не опасен обман чувств",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "",
  answer: "Л. Эйлер"
}, {
  theme: Themes[3],
  question: "Предмет математики столь серьезен, что не следует  упускать ни одной возможности сделать его более занимательным.",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "",
  answer: "Б. Паскаль"
}, {
  theme: Themes[4],
  question: "Попробуй и отгадай.<br>Разгадал загадку круга,<br> Метод площадей нам дал,<br> Знаем мы, как в Сиракузах<br> Родину он защищал.<br> Свой народ спасал от бед, <br>Его имя ...",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "",
  answer: "Архимед"
}, {
  theme: Themes[4],
  question: "На острове Самос<br>Философ сей родился. <br>И во главу угла <br>Поставлены им числа. <br>И, говорят, за теорему <br>Принес богам быка он в жертву. <br>Был чемпионом Олимпиады, <br>Имел своих учеников. <br>Надеюсь, догадался каждый, <br>Что его имя ...",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "",
  answer: "Пифагор"
}, {
  theme: Themes[4],
  question: "Все, что раньше люди знали,<br> Он собрал в своих «Началах».<br>Было их 13 книг, Написал их все ..",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "",
  answer: "Евклид"
}, {
  theme: Themes[4],
  question: "Очень слабым он родился, <br>Но науке все ж сгодился. <br>Открыл не кто иной, <br>А он притяжения закон. <br>Интеграл дал миру он, <br>Физик ..",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "",
  answer: "Ньютон"
}, {
  theme: Themes[4],
  question: "Математики  начала <br>По обоям изучала <br>И влюбилась в ту науку. <br> Только вот какая штука. <br>Ведь в России в это время <br>Не пускали в вузы женщин. <br>Чтоб в математике достичь вершин, <br>Пришлось уехать девушке в Берлин, <br>И стать для этого фальшивою невестою, <br>Такой мы знаем ...",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "https://puu.sh/HxuTn/8fc2c41326.png",
  answer: "Софью Ковалевскую"
}, {
  theme: Themes[6],
  question: "В эту игру умеют играть все. <br>Это одна из древнейших игр. <br>Для того, чтобы играть в нее, <br>достаточно иметь лист бумаги и ручку.<br> Наверное поэтому в нее играют на уроках тайком от учителя. ",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "https://puu.sh/HxuUn/7742c84ed2.png",
  answer: "крестики, нолики"
}, {
  theme: Themes[6],
  question: "Древняя игра, берущая начало в Индии и имеющая многовековую историю; сочетает в себе элементы науки, искусства и спорта. Способствует развитию фантазии и концентрации внимания, воспитанию характера и воли, приучает логически мыслить. Что это за игра?",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "https://puu.sh/HxuV4/445cd28050.png",
  answer: "Шахматы"
}, {
  theme: Themes[5],
  question: 'Жил – был игрок, он был далек от всякой науки<br>Любой урок ему не впрок, ему б монетку в руки<br>Что в жертву рок его обрек не мог он знать заранее<br>Один бросок, другой бросок – и выигрыш в кармане!<br>Приходит срок и наутек пускается удача…<br>Один бросок, другой бросок – и выигрыша нету!»<br>Какова вероятность выигрыша при игре «Орлянка" ?<br>',
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "https://puu.sh/HxuVB/48132636b4.png",
  answer: ""
}, {
  theme: Themes[5],
  question: "В эту игру играли еще египетские фараоны, правда она несколько отличалась от современной. Затем игра проникла в Грецию и в Древний Рим. Предметы этой игры были найдены в гробнице Тутанхамона. Появление этой игры на Руси связано с именем Владимира Мономаха. ",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "https://puu.sh/HxuWl/b7a67f2b68.png",
  answer: " Шашки"
}, {
  theme: Themes[5],
  question: "Назовите родоначальника науки кибернетика",
  image: "https://puu.sh/HxuKa/998e95fa63.png",
  audio: "",
  points: 500,
  imageOfAnswer: "https://puu.sh/HxuKa/998e95fa63.png",
  answer: "Норберт Виннер"
}, {
  theme: Themes[5],
  question: "Как называлась  счётная доска у древних греков?",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "https://puu.sh/HxuE7/ee1086be02.png",
  answer: "Абак"
}, {
  theme: Themes[5],
  question: "Как назывался прибор, выполнявший все четыре действия,который был прототипом прибора, созданного в 1673 году немецким физиком и математиком <br>Готфридом   Вильгельмом  Лейбницем?",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "https://puu.sh/HxuFh/f8a1fe6211.png",
  answer: "Арифмометр"
}, {
  theme: Themes[6],
  question: "Как называется  прибор, который  использовали школьники для упрощения вычислений до изобретения  микрокалькулятора?",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "https://puu.sh/HxuGx/a2ed6bff90.png",
  answer: "Логарифми́ческая лине́йка "
}, {
  theme: Themes[6],
  question: "Кот в мешке. Назовите автора первой вычислительной машины , работавшей на двоичной логике и применявшее арифметику с плавающей запятой",
  image: "https://puu.sh/HxuIF/53839df6df.png",
  audio: "",
  points: 400,
  imageOfAnswer: "https://puu.sh/HxuJi/033193aa1f.png",
  answer: "Конрад Цузе  "
}, {
  theme: Themes[6],
  question: "В 2004 году исполнилось 30 лет с тех пор, как весь мир развлекается этой игрой головоломкой. Конечно, пик популярности ее прошёл, но если предмет этой игры попадет в руки думающего человека, он не откажется привести его в порядок. Назовите профессию и родину изобретателя этой игры",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "https://puu.sh/HxuXG/c88f98df9d.jpg",
  answer: "Эрно Рубик (Будапешт, Венгрия) — венгерский изобретатель, скульптор и профессор архитектуры"
}, {
  theme: Themes[7],
  question: " Вначале - двойка.<br> Далее - мужчина,<br>Высокого он титула<br> и чина.<br>А слово целиком - обозначенье,<br>Дробящее на дозы <br>обученье.",
  image: "",
  audio: "",
  points: 100,
  imageOfAnswer: "",
  answer: "параграф"
}, {
  theme: Themes[7],
  question: "Читаем мы направо смело -<br>Геометрическое тело.<br>Прочтём же справа мы налево -<br>Увидим разновидность древа.",
  image: "",
  audio: "",
  points: 200,
  imageOfAnswer: "",
  answer: "куб - бук"
}, {
  theme: Themes[7],
  question: "Читаем мы направо смело -<br>Геометрическое тело.<br>Прочтём же справа мы налево -<br>Увидим разновидность древа.",
  image: "",
  audio: "",
  points: 300,
  imageOfAnswer: "",
  answer: "куб - бук"
}, {
  theme: Themes[7],
  question: "Предлог стоит в моём начале,<br>В конце же - загородный дом.<br>А целое мы все решали<br>И у доски, и за столом",
  image: "",
  audio: "",
  points: 400,
  imageOfAnswer: "",
  answer: "задача"
}, {
  theme: Themes[7],
  question: " Я – цифра – меньше десяти,Меня тебе легко найти.<br>Но если букве «Я» прикажешь <br>рядом встать,<br>Я все – отец и ты, и дедушка, и мать.",
  image: "",
  audio: "",
  points: 500,
  imageOfAnswer: "",
  answer: "Семь – семья"
}]


// console.log(AllQuestion.length)
// Math.floor(AllQuestion.length/6)
// Themes.length
// console.log(Themes.length)

// localStorage.setItem('NumberInRow', Math.floor(AllQuestion.length/6));
// было выше
localStorage.setItem('NumberInRow', Math.floor(AllQuestion.length/Themes.length));
localStorage.setItem('length', AllQuestion.length);


function compareNumeric(a, b) {
  if (a.theme < b.theme) return -1;
  if (a.theme > b.theme) return 1 
    if ( a.points > b.points) return 1;
  if ( a.points < b.points) return -1;
  // if (a.theme ==  b.theme || a.points == b.points) return 0;
  // if (a.theme == b.theme || a.points < b.points)  return 1;
  return 0
}
// console.log(AllQuestion)
AllQuestion.sort(compareNumeric);
// console.log(AllQuestion.sort(compareNumeric))


// for ( let i=0; i<items.length; i++) {
//   items[i].innerHTML = ThemesForLoad[i];
// }

// let arr = [ 17, 2, 15 ];

// метод сортирует содержимое arr

// console.log( arr );  // 1, 15, 2
// console.log(Themes.length)
for ( let i = 0; i < Themes.length; i++) {

// AllQuestion[i+5].theme = Themes[i];
// AllQuestion[i+1].theme = Themes[i];
// AllQuestion[i+2].theme = Themes[i];
// AllQuestion[i+3].theme = Themes[i];
// AllQuestion[i+4].theme = Themes[i];

}
// console.log(Themes.length)
let items = document.querySelectorAll('.title-theme');
// console.log(items)
for ( let i = 0; i < items.length; i++) {
  // items[i].textContent = Themes[i];
  // items[i].textContent = 't1'
  items[i].textContent = AllQuestion[i*(Math.floor(AllQuestion.length / Themes.length))].theme;
// items[i+1].theme = Themes[i];
// items[i+2].theme = Themes[i];
// items[i+3].theme = Themes[i];
// items[i+4].theme = Themes[i];
}
// console.log(Math.floor(AllQuestion.length / Themes.length))
  // items[3].textContent = AllQuestion[19].theme;


  let NamingForPoints = document.querySelectorAll('.points');
// console.log(NamingForPoints)
for (let  j = 0; j < NamingForPoints.length; j++) {
  NamingForPoints[j].textContent = AllQuestion[j].points;
}
//test mifomen

for ( let i=0; i<5; i++) {
  for ( let j=0; j<AllQuestion.length; j++) {
    AllQuestion[i].theme = Themes[j]
  }
}

// console.log(AllQuestion)