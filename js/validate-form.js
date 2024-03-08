import { VALID_SYMBOLS, MAX_HASHTAGS } from './constants.js';

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

const getArrayHashtags = (userString) => {
  if (userString.length === 0) {
    hashtags = [];
  } else {
    hashtags.length = 0;
    hashtags = String(userString).toLowerCase().replace(/\s+/g, ' ').trim().split(' ');
  }
};

const validatetSymbols = (value) => {
  getArrayHashtags(value);
  return hashtags.every((hashtag) => VALID_SYMBOLS.test(hashtag));
};

const validateMaxHhtags = (value) => {
  getArrayHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const validateUniqueHhtags = (value) => {
  getArrayHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(
  imageHashtag,
  validatetSymbols,
  'Первый символ #, максимум 20 символов, нельзя использовать после # (#, @, $, -, +, и т.д.)',
  1,
  true);

pristine.addValidator(
  imageHashtag,
  validateMaxHhtags,
  'Не более 5 #ХешТэгов',
  2,
  true
);

pristine.addValidator(
  imageHashtag,
  validateUniqueHhtags,
  'Не может быть 2 одинаковых #ХешТэга ',
  3,
  true
);

pristine.addValidator(
  imageDescription,
  validateDescription,
  'Не более 140 символов',
);

function resetPristine() {
  pristine.reset();
}

const isValidate = () => pristine.validate();

export { resetPristine, isValidate };

