import { isEscKey } from './utils.js';
import { TIMEOUT } from './constants.js';
import { addFormKeydownEvent, removeFormKeydownEvent } from './form.js';

const body = document.querySelector('body');
const errorTemplate = body.querySelector('#error').content.querySelector('.error');
const successTemplate = body.querySelector('#success')
  .content.querySelector('.success');

let errorGetData;

const createerrorGetData = () => {
  errorGetData = errorTemplate.cloneNode(true);
  errorGetData.querySelector('.error__title').style.lineHeight = '50px';
  errorGetData.querySelector('.error__title').textContent = 'Что то пошло ни так. Изображения других пользоваелей не загрузились.';
  errorGetData.querySelector('.error__button').classList.add('hidden');
  body.insertAdjacentElement('beforeend', errorGetData);
  setTimeout(() => {
    errorGetData.remove();
  }, TIMEOUT);
};

const createErrorBanner = () => {
  const errorBanner = document.createElement('div');
  errorBanner.style.zIndex = '50';
  errorBanner.style.position = 'absolute';
  errorBanner.style.left = '0';
  errorBanner.style.top = '0';
  errorBanner.style.right = '0';
  errorBanner.style.padding = '5px';
  errorBanner.style.fontSize = '15px';
  errorBanner.style.textAlign = 'center';
  errorBanner.style.backgroundColor = '#ff8a8a';
  errorBanner.style.color = '#000000';
  errorBanner.textContent = 'Ошибка загрузки данных. Попробуйте обновить страницу';
  body.append(errorBanner);
};

const showErrorGetData = () => {
  createerrorGetData();
  setTimeout(() => {
    createErrorBanner();
  }, TIMEOUT);
};

const onDocumentKeydown = (e) => {
  if (isEscKey(e)) {
    e.preventDefault();
    const element = body.lastElementChild;
    if (element.classList.contains('success') || element.classList.contains('error')) {
      closeMessage(element);
    }
  }
};

const onOutsideСlick = (e) => {
  const element = body.lastElementChild;
  if (!element.querySelector('div').contains(e.target) && element.classList.contains('success') || element.classList.contains('error')) {
    e.preventDefault();
    closeMessage(element);
  }
};

const onButtonСlick = (e) => {
  const element = e.target.closest('section');
  if (element.classList.contains('success') || element.classList.contains('error')) {
    closeMessage(element);
  }
};

const addCloseEvent = (element) => {
  element.querySelector('button').addEventListener('click', onButtonСlick);
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('click', onOutsideСlick);
};

const removeCloseEvent = (element) => {
  element.querySelector('button').removeEventListener('click', onButtonСlick);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('click', onOutsideСlick);
};

function closeMessage(element) {
  if (element.matches('.error')) {
    addFormKeydownEvent();
    element.remove();
    removeCloseEvent(element);
    addFormKeydownEvent();
  }
  element.remove();
  removeCloseEvent(element);
}

const showSuccessSendData = () => {
  const successSendData = successTemplate.cloneNode(true);
  body.insertAdjacentElement('beforeend', successSendData);
  addCloseEvent(successSendData);
};

const showErrorSendData = () => {
  const errorSendData = errorTemplate.cloneNode(true);
  body.insertAdjacentElement('beforeend', errorSendData);
  addCloseEvent(errorSendData);
  removeFormKeydownEvent();
};

export { showErrorGetData, showSuccessSendData, showErrorSendData };
