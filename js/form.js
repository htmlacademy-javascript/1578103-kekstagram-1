import { isEscKey } from './utils.js';
import { resetPristine, isValidate } from './validate-form.js';
import { resetScale } from './scale.js';
import { resetEffect } from './effects.js';
import { sendData } from './api.js';
import { FILE_TYPES } from './constants.js';

const body = document.querySelector('body');
const form = body.querySelector('#upload-select-image');
const imgeUpload = form.querySelector('.img-upload__input');
const imageEditor = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const imageDescription = form.querySelector('.text__description');
const imageHashtag = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('.img-upload__submit');
const photoPreview = document.querySelector('.img-upload__preview img');

const clearForm = () => {
  imgeUpload.value = '';
  imageDescription.value = '';
  imageHashtag.value = '';
  resetScale();
  resetEffect();
};

const addFormKeydownEvent = () => {
  document.addEventListener('keydown', onDocumentKeydown);
};

const removeFormKeydownEvent = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};

const addListenerKeydown = () => {
  addFormKeydownEvent();
  imageDescription.addEventListener('keydown', onInputKeydown);
  imageHashtag.addEventListener('keydown', onInputKeydown);
};

const removeListenerKeydown = () => {
  removeFormKeydownEvent();
  imageDescription.removeEventListener('keydown', onInputKeydown);
  imageHashtag.removeEventListener('keydown', onInputKeydown);
};

const openForm = () => {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
  resetScale();
  resetEffect();
  closeButton.addEventListener('click', oncloseButtonClick);
  addListenerKeydown();
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
  const file = imgeUpload.files[0];
  const fileName = file.name.toLowerCase();
  const extensionMatches = FILE_TYPES.some((item) => fileName.endsWith(item));
  if (extensionMatches) {
    photoPreview.src = URL.createObjectURL(file);
  }
  openForm();
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isValidate()) {
    blockSubmitButton();
    sendData(new FormData(e.target))
      .then(closeForm)
      .catch(() => {
        throw Error();
      }
      )
      .finally(unblockSubmitButton);
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

export { addFormKeydownEvent, removeFormKeydownEvent };
