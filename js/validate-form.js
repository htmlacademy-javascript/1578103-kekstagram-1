import { VALID_SYMBOLS, VALID_FIRST_SYMBOL, MAX_HASHTAGS } from './constants.js';

const form = document.querySelector('#upload-select-image');
const imageDescription = form.querySelector('.text__description');
const imageHashtag = form.querySelector('.text__hashtags');

let hashtags = [];

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const getArrayHeshtags = (userString) => {
  hashtags.length = 0;
  hashtags = String(userString).toLowerCase().replace(/\s+/g, ' ').trim().split(' ');
};

const validateFirstSymbol = (value) => {
  getArrayHeshtags(value);
  return hashtags.every((hashtag) => VALID_FIRST_SYMBOL.test(hashtag));
};

const validateSymbols = (value) => {
  getArrayHeshtags(value);
  return hashtags.every((hashtag) => VALID_SYMBOLS.test(hashtag));
};

const validateMaxHhtags = (value) => {
  getArrayHeshtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const validateUniqueHhtags = (value) => {
  getArrayHeshtags(value);
  return hashtags.length === new Set(hashtags).size;
};


const validateDescription = (value) => value.length <= 140;

pristine.addValidator(imageHashtag, validateFirstSymbol, 'Первый символ #');

pristine.addValidator(imageHashtag, validateSymbols, 'После # необходим от 1 до 19. Нельзя применять после # (#, @, $, -, +, и т.д.)');

pristine.addValidator(imageHashtag, validateMaxHhtags, 'Не более 5 #ХешТэгов');

pristine.addValidator(imageHashtag, validateUniqueHhtags, 'Не может быть 2 одинаковых #ХешТэга ');

pristine.addValidator(imageDescription, validateDescription, 'Не более 140 символов');

function resetPristine() {
  pristine.reset();
}

const isValidate = () => pristine.validate();

export { resetPristine, isValidate };
