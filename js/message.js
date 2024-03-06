// import { isEscKey } from './utils.js';

const body = document.querySelector('body');
const errorTemplate = body.querySelector('#error').content.querySelector('.error');
const successTemplate = body.querySelector('#success')
  .content.querySelector('.success');

const showErrorGetData = (errMessage) => {
  const errorGetData = errorTemplate.cloneNode(true);
  errorGetData.querySelector('.error__title').style.lineHeight = '50px';
  errorGetData.querySelector('.error__title').textContent = errMessage;
  errorGetData.querySelector('.error__button').classList.add('hidden');
  body.insertAdjacentElement('beforeend', errorGetData);
  setTimeout(() => {
    errorGetData.remove();
  }, 2000);
};

// const onDocumentKeydown = (e) => {
//   if (isEscKey(e)) {
//     e.preventDefault();
//     closeMessage();
//   }
// };

const onButtonclick = (closeElemente) => {
  closeMessage(closeElemente);
};

function closeMessage(element) {
  element.remove();
}


// const addCloseListiner = (element) => {
//   element.querySelector('button').addEventListener(('click'), onButtonclick(element));
// };

const showSuccessSendData = () => {
  const successSendData = successTemplate.cloneNode(true);
  body.insertAdjacentElement('beforeend', successSendData);
  // addCloseListiner(successSendData);
};


export { showErrorGetData, showSuccessSendData };
