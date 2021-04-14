

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
'Войны Древней Греции ', //0
'Города Древнейшей Греции', //1
'Древнегреческая мифология', //2
'Олимпийские игры', //3
'Словарь', //4,
'Александр Македонский' //5

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


var AllQuestion = [
{ //1
  theme: Themes[0], 
  question: 'Наиболее подробное изложение событий этой войны содержится в 2-х поэмах — «Илиаде» и «Одиссее»',
  image:'https://puu.sh/Hy081/294ac33e9d.png', //https://stihi.ru/pics/2020/03/07/1196.jpg
  audio:'', 
  points: 10,
  imageOfAnswer:'',
  answer:'Троянская война'
},
{ //2
  theme:Themes[0], 
  question: 'Во время греко-персидских войн этот небольшой отряд ненадолго сдержал войска персов от вторжения в Грецию. Что это был за отряд?', 
  image:'https://puu.sh/Hy0bH/cbb56a503f.png',
  audio:'',
  points: 20,
  imageOfAnswer:'',
  answer:'300 спартанцев'
},
{ //3
  theme:Themes[0], 
  question: 'Какое расстояние было между полем боя Марафонской битвы и Афинами?',
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer:'42 км'
},
{ //4
  theme:Themes[0], 
  question: 'В героических сказаниях древних греков он является храбрейшим из героев, участвовавших в Троянской войне. Назовите его.',
  image:'',
  audio:'', 
  points: 40,
  imageOfAnswer:'',
  answer:'Ахиллес'
},
{ //5
  theme:Themes[0], 
  question: 'За несколько лет до начала греко-персидских войн персы завоевали весь полуостров Малая Азия, но город Троя не был захвачен. Почему?', 
  image:'',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer:'Он был разрушен еще во время Троянской войны'
},
{ //6
  theme:Themes[1], 
  question: 'В этом городе существовала традиция: слабых и немощных детей кидали в «апотеты», пропасть возле Тайгета.', 
  image:'',
  audio:'',
  points: 10,
  imageOfAnswer:'',
  answer: 'В Спарте'
},
{ //7
  theme:Themes[1],   
  question: 'В этом городе находится Акрополь', 
  image:'https://puu.sh/Hy0jJ/62462d922d.png',
  audio:'',
  points: 20,
  imageOfAnswer:'',
  answer: 'В Афинах'
},
{ //8
  theme:Themes[1],   
  question: 'В каком городе Древней Греции было два царя?', 
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer:'В Спарте'
},
{ //9
  theme:Themes[1],  
  question: 'Этот город был столицей острова Крит', 
  image:'',
  audio:'',
  points: 40,
  imageOfAnswer:'',
  answer: 'Кносс'
},
{ //10
  theme:Themes[1],  
  question: 'Город, который обнаружил в 1870 г. археолог Генрих Шлиман', 
  image:'https://puu.sh/Hy0lk/7c717eb608.png',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer: 'Троя' 
},
{ //11
  theme:Themes[2],  
  question: 'Бог, покровитель вина и виноделия', 
  image:'',
  audio:'',
  points: 10,
  imageOfAnswer:'https://puu.sh/Hy0mL/fd2f6d00d7.png',
  answer: 'Дионис'
},
{ //12
  theme:Themes[2], 
  question: 'Это мифологическое существо подстерегало путников на дороге, задавало им хитроумные загадки и убивало всех, кто не мог их отгадать.', 
  image:'',
  audio:'',
  points: 20,
  imageOfAnswer:'https://puu.sh/Hy0rY/7684cebb16.png',
  answer:'Сфинкс'
},
{ //13
  theme:Themes[2], 
  question: 'Персонаж древнегреческой мифологии, выдающийся художник и инженер, построивший лабиринт на острове Крит.', 
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer:'Дедал'
},
{ //14
  theme:Themes[2],  
  question: 'Главными атрибутами этой богини являются колчан со стрелами, лань и колесница.', 
  image:'',
  audio:'',
  points: 40,
  imageOfAnswer:'https://puu.sh/Hy0sY/b3f82fd742.png',
  answer: 'Артемида'
},
{ //15
  theme:Themes[2], 
  question: 'Мифологическое чудовище, которое питалось мясом, но при этом не имело клыков.', 
  image:'',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer: 'Минотавр'
},
{ //16
  theme:Themes[3],  //mifomen
  question: 'Сколько времени продолжались Олимпийские игры в древней Греции?', 
  image:'',
  audio:'',
  points: 10,
  imageOfAnswer:'',
  answer: '5 дней'
},
{ //17
  theme:Themes[3],  
  question: 'На олимпийских играх пятиборье состояло из следующих видов: бег, прыжки в длину, борьба, метание копья и …', 
  image:'',
  audio:'',
  points: 20,
  imageOfAnswer:'https://puu.sh/Hy0uX/fce1defc08.png',
  answer: 'Метание диска'
},
{ //18
  theme:Themes[3], 
  question: 'От этой даты древние греки вели свое летоисчисление.',
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer: '776 г. до н. э. '
},
{ //21
  theme:Themes[4],
  question: 'Место постройки и ремонта судов.', 
  image:'',
  audio:'',
  points: 10,
  imageOfAnswer:'',
  answer: 'Верфь'
},
{ //22
  theme:Themes[4], 
  question: 'Это слово по-гречески означает «военачальник»', 
  image:'',
  audio:'',
  points: 20,
  imageOfAnswer:'',
  answer: 'Стратег'
},
{ //22
  theme:Themes[4], 
  question: 'Это земли, основанные вне территории государства', 
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer: 'Колонии'
},
{ //23
  theme:Themes[4],
  question: 'Громадные глиняные бочки для хранения зерна', 
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer: 'Пифос' 
},
{ //25
  theme:Themes[4], 
  question: 'Так назывался совет знати в Афинах', 
  image:'',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer: 'Ареопаг' 
},
{ // 19
  theme:Themes[3],  
  question: 'Победитель Олимпийских игр, знаменитый бегун и кулачный боец, в детстве наказанный за то, что унес с площади большую бронзовую статую',
  image:'',
  audio:'',
  points: 40,
  imageOfAnswer:'',
  answer: 'Феаген'
},
{ //20
  theme:Themes[3], 
  question: 'Сколько кругов было в гонках колесниц на олимпийском ипподроме?', 
  image:'',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer: '12'
},
{ //24
  theme:Themes[5], 
  question: 'В период империи Александра Македонского во всех завоеванных им странах было свыше 20 таких городов, из которых до наших дней дожил лишь один. Назовите его.', 
  image:'',
  audio:'',
  points: 40,
  imageOfAnswer:'',
  answer: 'Александрия' 
},,
{ //21
  theme:Themes[5],
  question: 'На территории какого полуострова расположена Македония?', 
  image:'https://puu.sh/Hy0zX/c4fb1b303f.png',
  audio:'',
  points: 10,
  imageOfAnswer:'',
  answer: 'Балканского'
},
{ //22
  theme:Themes[5], 
  question: 'Какой крупнейший греческий ученый обучал Александра Македонского?', 
  image:'',
  audio:'',
  points: 20,
  imageOfAnswer:'https://puu.sh/Hy0Ap/ce195e4a53.png',
  answer: 'Аристотель'
},
{ //23
  theme:Themes[5],
  question: 'В этой битве, которая началась, когда наступал вечер, Александра Македонского от гибели спас его друг по имени Клит.', 
  image:'',
  audio:'',
  points: 30,
  imageOfAnswer:'',
  answer: 'Битва на реке Граник' 
},
{ //25
  theme:Themes[5], 
  question: 'Почувствовав приход смерти, Александр Македонский велел пронести себя через весь Вавилон с обнаженными руками.<br><u>Что он хотел этим продемонстрировать?</u>', 
  image:'',
  audio:'',
  points: 50,
  imageOfAnswer:'',
  answer: 'Что уходит из этого мира с пустыми руками.' 
}
]


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
    items[i].textContent = AllQuestion[i*(Themes.length-1)].theme;
// items[i+1].theme = Themes[i];
// items[i+2].theme = Themes[i];
// items[i+3].theme = Themes[i];
// items[i+4].theme = Themes[i];
}
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