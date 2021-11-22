
const setOpacityItems = (item) => {
  item.style.opacity = 1;
}

const setOpacityItem = (item,delay) => {

  setTimeout(setOpacityItems(item),delay)

  console.log('setOpacityItem = success')
}
// setTimeout(TextArea.style.opacity = 1, 5100);


// const ESCAPE = 27;
// const ENTER_KEY_CODE = 13;
// const TAB_KEY_CODE = 9; //9
// const UP_ARROW_KEY_CODE = 38; //33
// const DOWN_ARROW_KEY_CODE = 40; //34

// const TabButton=1;

// document.onkeydown  = function(evt) {

//   if (evt.keyCode == ESC_KEY_CODE ) {
//     let elem = document.querySelector('#AnswerSee');
//     if (elem) {elem.parentNode.removeChild(elem);}

//     let elem1 = document.querySelector('#Qestion-Delete');
//     if (elem1) {elem1.parentNode.removeChild(elem1);}
//   }
// };

// // удаление окна с вопросом
// let testDiologDelete = function () { //eslint-disable-line
// let elem = document.getElementById('Qestion-Delete'); //eslint-disable-line
// if (elem) {elem.parentNode.removeChild(elem);} //eslint-disable-line
// };

// // let StateOfButton;
// // const StateOfButtonRightSide = 1;
// let  ArrayOfButtonsVote;
// document.onkeydown = function(evt) {
//   if (evt.keyCode === UP_ARROW_KEY_CODE ) {
//     if (document.querySelector('.AnswerImage')) {
//       ArrayOfButtonsVote = document.querySelectorAll('.VoteButton');
//       // StateOfButton = 0;
//       ARROWrrayOfButtonsVote[0].focus(); //eslint-disable-line
//     }
//   }

//   if (evt.keyCode === DOWN_ARROW_KEY_CODE ) {
//     ArrayOfButtonsVote[ArrayOfButtonsVote.length-1].focus();
//   }
// };

export {setOpacityItems,setOpacityItem}
