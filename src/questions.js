
let Themes = [
'Формулы',
'Толкование',
'Единицы измерения',
'Крылатые фразы',
'Великие математики',
'Вычислительная техника',
'Математические развлечения',
'Шарады'
]


var ThemesForLoad = [
Themes[0],
Themes[1],
Themes[2],
Themes[3],
Themes[4],
Themes[5],
Themes[6],
Themes[7]
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
  question: 'Попробуй и отгадай.<br>Разгадал загадку круга,<br> Метод площадей нам дал,<br> Знаем мы, как в Сиракузах<br> Родину он защищал.<br> Свой народ спасал от бед, <br>Его имя ...', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'',
  answer: 'Архимед'
},
{ //22
  theme:Themes[4],
  question: 'На острове Самос<br>Философ сей родился. <br>И во главу угла <br>Поставлены им числа. <br>И, говорят, за теорему <br>Принес богам быка он в жертву. <br>Был чемпионом Олимпиады, <br>Имел своих учеников. <br>Надеюсь, догадался каждый, <br>Что его имя ...', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'Пифагор'
},
{ //23
  theme:Themes[4],
  question: 'Все, что раньше люди знали,<br> Он собрал в своих «Началах».<br>Было их 13 книг, Написал их все ..', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'Евклид' 
},
{ //24
  theme:Themes[4],
  question: 'Очень слабым он родился, <br>Но науке все ж сгодился. <br>Открыл не кто иной, <br>А он притяжения закон. <br>Интеграл дал миру он, <br>Физик ..', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'',
  answer: 'Ньютон' 
},
{ //25
  theme:Themes[4],
  question: 'Математики  начала <br>По обоям изучала <br>И влюбилась в ту науку. <br> Только вот какая штука. <br>Ведь в России в это время <br>Не пускали в вузы женщин. <br>Чтоб в математике достичь вершин, <br>Пришлось уехать девушке в Берлин, <br>И стать для этого фальшивою невестою, <br>Такой мы знаем ...', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'https://puu.sh/HxuTn/8fc2c41326.png',
  answer: 'Софью Ковалевскую' 
},
{ //26
  theme:Themes[6],
  question: 'В эту игру умеют играть все. <br>Это одна из древнейших игр. <br>Для того, чтобы играть в нее, <br>достаточно иметь лист бумаги и ручку.<br> Наверное поэтому в нее играют на уроках тайком от учителя. ', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'https://puu.sh/HxuUn/7742c84ed2.png',
  answer: 'крестики, нолики' 
},
{ //27
  theme:Themes[6],
  question: 'Древняя игра, берущая начало в Индии и имеющая многовековую историю; сочетает в себе элементы науки, искусства и спорта. Способствует развитию фантазии и концентрации внимания, воспитанию характера и воли, приучает логически мыслить. Что это за игра?', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'https://puu.sh/HxuV4/445cd28050.png',
  answer: 'Шахматы' 
},
{ //28
  theme:Themes[5],
  question: 'Жил – был игрок, он был далек от всякой науки<br>Любой урок ему не впрок, ему б монетку в руки<br>Что в жертву рок его обрек не мог он знать заранее<br>Один бросок, другой бросок – и выигрыш в кармане!<br>Приходит срок и наутек пускается удача…<br>Один бросок, другой бросок – и выигрыша нету!»<br>Какова вероятность выигрыша при игре «Орлянка" ?<br>',
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'https://puu.sh/HxuVB/48132636b4.png',
  answer: '' 
},
{ //29
  theme:Themes[5],
  question: 'В эту игру играли еще египетские фараоны, правда она несколько отличалась от современной. Затем игра проникла в Грецию и в Древний Рим. Предметы этой игры были найдены в гробнице Тутанхамона. Появление этой игры на Руси связано с именем Владимира Мономаха. ', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'https://puu.sh/HxuWl/b7a67f2b68.png',
  answer: ' Шашки' 
},
{ //30
  theme:Themes[5],
  question: 'Назовите родоначальника науки кибернетика', 
  image:'https://puu.sh/HxuKa/998e95fa63.png', //https://puu.sh/HxuMj/5495cc2bd6.png
  audio:'', //https://puu.sh/HxuL2/0a03a349f9.png
  points: 500,
  imageOfAnswer:'https://puu.sh/HxuKa/998e95fa63.png',
  answer: 'Норберт Виннер' 
},
{ //31
  theme:Themes[5],
  question: 'Как называлась  счётная доска у древних греков?', 
  image:'',
  audio:'',
  points: 100,
  imageOfAnswer:'https://puu.sh/HxuE7/ee1086be02.png',
  answer: 'Абак' 
},
{ //32
  theme:Themes[5],
  question: 'Как назывался прибор, выполнявший все четыре действия,который был прототипом прибора, созданного в 1673 году немецким физиком и математиком <br>Готфридом   Вильгельмом  Лейбницем?', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'https://puu.sh/HxuFh/f8a1fe6211.png',
  answer: 'Арифмометр' 
},
{ //33
  theme:Themes[5],
  question: 'Как называется  прибор, который  использовали школьники для упрощения вычислений до изобретения  микрокалькулятора?', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'https://puu.sh/HxuGx/a2ed6bff90.png',
  answer: 'Логарифми́ческая лине́йка ' 
},
{ //34
  theme:Themes[5],
  question: 'Кот в мешке. Назовите автора первой вычислительной машины , работавшей на двоичной логике и применявшее арифметику с плавающей запятой', 
  image:'https://puu.sh/HxuIF/53839df6df.png',
  audio:'',
  points: 400,
  imageOfAnswer:'https://puu.sh/HxuJi/033193aa1f.png',
  answer: 'Конрад Цузе  ' 
},
{ //36
  theme:Themes[5],
  question: 'В 2004 году исполнилось 30 лет с тех пор, как весь мир развлекается этой игрой головоломкой. Конечно, пик популярности ее прошёл, но если предмет этой игры попадет в руки думающего человека, он не откажется привести его в порядок. Назовите профессию и родину изобретателя этой игры', 
  image:'',
  audio:'',
  points: 500,
  imageOfAnswer:'https://puu.sh/HxuXG/c88f98df9d.jpg',
  answer: 'Эрно Рубик (Будапешт, Венгрия) — венгерский изобретатель, скульптор и профессор архитектуры' 
},
{ //37
  theme:Themes[5],
  question: ' Вначале - двойка.<br> Далее - мужчина,<br>Высокого он титула<br> и чина.<br>А слово целиком - обозначенье,<br>Дробящее на дозы <br>обученье.', 
  image:'',
  audio:'',
  points: 200,
  imageOfAnswer:'',
  answer: 'параграф' 
},
{ //38
  theme:Themes[5],
  question: 'Читаем мы направо смело -<br>Геометрическое тело.<br>Прочтём же справа мы налево -<br>Увидим разновидность древа.', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer: 'куб - бук' 
},
{ //38
  theme:Themes[5],
  question: 'Читаем мы направо смело -<br>Геометрическое тело.<br>Прочтём же справа мы налево -<br>Увидим разновидность древа.', 
  image:'',
  audio:'',
  points: 300,
  imageOfAnswer:'',
  answer: 'куб - бук' 
},
{ //39
  theme:Themes[5],
  question: 'Предлог стоит в моём начале,<br>В конце же - загородный дом.<br>А целое мы все решали<br>И у доски, и за столом', 
  image:'',
  audio:'',
  points: 400,
  imageOfAnswer:'',
  answer: 'задача' 
},
{ //40
  theme:Themes[5],
  question: ' Я – цифра – меньше десяти,Меня тебе легко найти.<br>Но если букве «Я» прикажешь <br>рядом встать,<br>Я все – отец и ты, и дедушка, и мать.', 
  image:'', //https://puu.sh/HxuMj/5495cc2bd6.png
  audio:'', //https://puu.sh/HxuL2/0a03a349f9.png
  points: 500,
  imageOfAnswer:'',
  answer: 'Семь – семья' 
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