
const setOpacityItems = (item) => {
  item.style.opacity = 1;
};

const setOpacityItem = (item, delay) => {
  setTimeout(setOpacityItems(item), delay);
};
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

const minus1000points = (evt) => {
  evt.target.textContent = parseInt(evt.target.textContent,10)-parseInt(1000,10);
}

const minus1000 = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).addEventListener('click',minus1000points)
  }
}

const removeClickMinus1000 = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelector(selector).removeEventListener('click',minus1000points)
  }
}

const getImage = (src) => {
  if (src !== '') {
    // console.log(`${document.querySelector('.image-output').style.cssText}`)
    document.querySelector('.image-output').style.cssText = `background-repeat: no-repeat; background-position: center center;background-image: url(${src});  background-size: 90%; background-color: var(--gradient2-2);`;
    document.querySelector('.question-text').style.cssText = `padding: 15px; border: 5px solid rgba(0,0,0,0.8);`;

    document.querySelector('.js-close-question').classList.add('btn-close-getImage')
  }
};

const getAnswerImage = (src) => {
  if (src !== '') {
    document.querySelector('.AnswerImage').style.cssText = `background-repeat: no-repeat; background-position: center center;background-image: url(${src});  background-size: 90%; background-color: var(--gradient2-2);`;
  }
}

function loadJSON(name) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', name, false);
  xhr.send();
  if (xhr.status !== 200) {
    //eslint-disable-next-line
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  }
  return xhr.responseText;
}

function loadDataJSON(URL) {
  return JSON.parse(loadJSON(`./quests/${URL}.json`));
}


export { setOpacityItems, setOpacityItem, getImage, loadDataJSON, minus1000, removeClickMinus1000,getAnswerImage };
