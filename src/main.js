var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
  })
};

var points = document.querySelectorAll('.points');
console.log(points);
var BtnStartGame = document.getElementById("StartGame");
console.log(BtnStartGame)

StartGame. addEventListener('click',function(evt){
document.querySelector('.game').classList.add('hidden');
document.querySelector('.Start-One').classList.remove('hidden');
})
// var game=document.querySelector('.game');
// var q=document.querySelector('.title');
// q.addEventListener('click', function(e){
// game.classList.toggle('hidden');
// });

// DOMContentLoaded
// document.addEventListener('DOMContentLoaded',function(e){
//   game.classList.toggle('hidden');
// });

// var q2=document.querySelector('.question');
// q2.addEventListener('click',function(e){
//   game.classList.toggle('hidden');
// })