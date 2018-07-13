var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click',function (evt) {
    evt.preventDefault();
  })
};
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