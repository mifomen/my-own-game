
let Themes = ['html','python','Интернет','Около scratch','css code']


var ThemesForLoad = [
Themes[0]+ ' <br> уровень 1',
Themes[0]+ '<br>уровень 2',
'Загадки',
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
{
  theme:Themes[0], 
  question: '123123расшифруйте аббревиатуру http', 
  image:'https://stihi.ru/pics/2020/03/07/1196.jpg',
  points: 150 
},
{
  theme:'html', 
  question: 'Что на самом деле происходит, когда пользователь вводит в браузере адрес сайта и нажимаете Enter?', 
  image:'',
  points: 201 
},
{
  theme:'html', 
  question: 'Где "живут" сайты?',
  image:'',
  points: 300 
},
{
  theme:'html', 
  question: 'Какой тег надо использовать для создания заголовков?',
  image:'', 
  points: 400 
},
{
  theme:'html', 
  question: 'Данная служба подсказывает, какой именно сайт хочет посетить пользователь', 
  image:'',
  points: 500 
},
{
  theme:'html', 
  question: 'Сколько людей нужно, чтобы создать сайт?', 
  image:'',
  image:'',
  points: 100 
},
{
  theme:'html', 
  question: 'Люди пишут слова, а браузеру надо написать?', 
  image:'',
  points: 200,
  answer: 'тэги'
},
{
  theme:'html', 
  question: 'Какой тег надо использовать чтобы создать абзац', 
  image:'',
  points: 300 
},
{
  theme:'html', 
  question: 'Для задания оформления, тегам прописывают..', 
  image:'',
  points: 400,
  answer: 'классы \ class'
},
{
  theme:'html', 
  question: 'Назовите 3-х китов, на которых держится интернет?', 
  image:'',
  points: 500,
  answer: 'html + css + js' 
},
{
  theme:'загадки', 
  question: 'Шли два отца и два сына, нашли три апельсина. Поделили – всем по одному. Как  так получилось?', 
  image:'',
  points: 100,
  answer: 'шли дед, отец и сын'
},
{
  theme:'загадки', 
  question: 'Что в России на первом месте, а во Франции на втором?', 
  image:'',
  points: 200,
  anwser:' Буква Р'
},
{
  theme:'загадки', 
  question: 'Завязать можно, а развязать нельзя', 
  image:'',
  points: 300,
  answer:'разговор'
},
{
  theme:'загадки', 
  question: 'По какому пути ещё никто никогда не ходил и не ездил?', 
  image:'',
  points: 400,
  answer: 'по млечному'
},
{
  theme:'загадки', 
  question: 'Чем кончаются день и ночь?', 
  image:'',
  points: 500,
  answer: 'мягким знаком'
},
{
  theme:'scratch', 
  question: 'Что такое scratch?', 
  image:'',
  points: 100 ,
  answer: 'песочница по програмимрованию'
},
{
  theme:'scratch', 
  question: 'Для чего используют scratch?', 
  image:'',
  points: 200,
  answer: 'создавать простые сценарии или игры'
},
{
  theme:'scratch', 
  question: 'Для удобства внедряют имеено их... ',
  image:'',
  points: 300,
  answer: 'переменные'
},
{
  theme:'scratch', 
  question: 'Чтобы обработать событие нужно добавить..',
  image:'',
  points: 400,
  answer: 'сенсор'
},
{
  theme:'scratch', 
  question: 'Чтобы писать кода меньше используют....', 
  image:'',
  points: 500,
  answer: 'циклы'
},
{
  theme:'code', 
  question: 'как называются объекты выполняющие команды?', 
  image:'',
  points: 100,
  answer: 'исполнители, роботы'
},
{
  theme:'code', 
  question: 'задать поведение можно спомощью....', 
  image:'',
  points: 200,
  answer: 'сценария'
},
{
  theme:'code', 
  question: 'когда мы пишем поведение, мы пишем ...', 
  image:'',
  points: 300,
  answer: 'код' 
},
{
  theme:'code', 
  question: 'Что появится у элемента в результате свойства border: 2px solid yellow', 
  image:'',
  points: 400,
  answer: 'сценария' 
},
{
  theme:'code', 
  question: 'При помощи background-repeat можно задать?', 
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