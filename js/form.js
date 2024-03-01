import { isEscKey } from './utils.js';
import { resetPristine, isValidate } from './validate-form.js';
import { SCALE_DEFAULT } from "./constants.js";
import { getStatusScaleButton, scaleUp } from './scale.js';


const body = document.querySelector('body');
const form = body.querySelector('#upload-select-image');
const imgeUpload = form.querySelector('.img-upload__input');
const imageEditor = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const imageDescription = form.querySelector('.text__description');
const imageHashtag = form.querySelector('.text__hashtags');
const scaleValue = form.querySelector('.scale__control--value');
const previewImage = form.querySelector('.img-upload__preview img');
const scaleUpButton = form.querySelector('.scale__control--bigger');
const scaleDownButton = form.querySelector('.img-upload__preview img');

const clearForm = () => {
  imgeUpload.value = '';
  imageDescription.value = '';
  imageHashtag.value = '';
  scaleValue.value = `${SCALE_DEFAULT * 100}%`;
  previewImage.style.transform = `scale(${SCALE_DEFAULT})`;

};

const getListenerKeydown = () => {
  document.addEventListener('keydown', onDocumentKeydown);
  imageDescription.addEventListener('keydown', onInputKeydown);
  imageHashtag.addEventListener('keydown', onInputKeydown);
};

const removeListenerKeydown = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
  imageDescription.removeEventListener('keydown', onInputKeydown);
  imageHashtag.removeEventListener('keydown', onInputKeydown);
};

const openForm = () => {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  clearForm();
  closeButton.addEventListener('click', oncloseButtonClick);
  getListenerKeydown();
  getStatusScaleButton();
  scaleUpButton.addEventListener('click', scaleUp)
};

const closeForm = () => {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  clearForm();
  closeButton.removeEventListener('click', oncloseButtonClick);
  removeListenerKeydown();
  resetPristine();
};

imgeUpload.addEventListener('change', () => {
  openForm();
});

form.addEventListener('submit', (e) => {
  if (!isValidate) {
    e.preventDefault();
  }
});

function oncloseButtonClick() {
  closeForm();
}

function onDocumentKeydown(e) {
  if (isEscKey(e)) {
    e.preventDefault();
    closeForm();
  }
}

function onInputKeydown(e) {
  e.stopPropagation();
}
