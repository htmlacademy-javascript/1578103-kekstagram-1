import { isEscKey } from './utils.js';
import { resetPristine } from './validate-download-form.js';


const body = document.querySelector('body');
const form = body.querySelector('#upload-select-image');
const imgeUpload = form.querySelector('.img-upload__input');
const imageEditor = form.querySelector('.img-upload__overlay');
const closeButton = form.querySelector('.img-upload__cancel');
const imageDescription = form.querySelector('.text__description');
const imageHashtag = form.querySelector('.text__hashtags');

const clearForm = () => {
  imgeUpload.value = '';
  imageDescription.value = '';
  imageHashtag.value = '';
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
  closeButton.addEventListener('click', oncloseButtonClick);
  getListenerKeydown();
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
