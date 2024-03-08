const DATA_URL = 'https://28.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA_URL: '/data',
  POST_DATA_URL: '/'
};
const Method = {
  GET: 'GET',
  POST: 'POST',
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
const TIMEOUT = 1000;
const MIN_INTEGER = 1;
const MAX_RANDOM_PHOTOS = 10;
const Filers = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  MAX_COMMENTS: 'filter-discussed'
};
const RERENDER_DELAY = 500;
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const NO_COMMENTS = 'Комментриев пока нет =(';

export {
  DATA_URL,
  Route,
  Method,
  COMMENTS_STEP,
  SCALE_STEP,
  SCALE_DEFAULT,
  MAX_SCALE,
  MIN_SCALE,
  VALID_SYMBOLS,
  MAX_HASHTAGS,
  EFFECTS,
  TIMEOUT,
  MIN_INTEGER,
  MAX_RANDOM_PHOTOS,
  Filers,
  RERENDER_DELAY,
  FILE_TYPES,
  NO_COMMENTS,
};
