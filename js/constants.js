const DATA_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const ROUTE = {
  GET_DATA_URL: '/data',
  POST_DATA_URL: '/'
};
const COMMENTS_STEP = 5;
const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 1;
const MAX_SCALE = 1;
const MIN_SCALE = 0.25;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS = 5;
const EFFECTS = [
  {
    name: 'chrome',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: '',
    style: 'grayscale',
  },
  {
    name: 'sepia',
    minValue: 0,
    maxValue: 1,
    step: 0.1,
    unit: '',
    style: 'sepia',
  },
  {
    name: 'marvin',
    minValue: 0,
    maxValue: 100,
    step: 1,
    unit: '%',
    style: 'invert',
  }, {
    name: 'phobos',
    minValue: 0,
    maxValue: 3,
    step: 0.1,
    unit: 'px',
    style: 'blur',
  }, {
    name: 'heat',
    minValue: 1,
    maxValue: 3,
    step: 0.1,
    unit: '',
    style: 'brightness',
  }];


export {
  DATA_URL,
  ROUTE,
  COMMENTS_STEP,
  SCALE_STEP,
  SCALE_DEFAULT,
  MAX_SCALE,
  MIN_SCALE,
  VALID_SYMBOLS,
  MAX_HASHTAGS,
  EFFECTS,
};
