const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_MIN_INDEX = 1;
const AVATAR_MAX_INDEX = 6;
const MIN_NUMBER_COMMENTS = 2;
const MAX_NUMBER_COMMENTS = 15;
const MAX_GENERATED_OBJECTS = 25;
const COMMENTS_STEP = 5;
const SCALE_STEP = 0.25;
const SCALE_DEFAULT = 1;
const MAX_SCALE = 1;
const MIN_SCALE = 0.25;
const VALID_SYMBOLS = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAGS = 5;
const CHROME = {
  name: 'chrome',
  minValue: 0,
  maxValue: 1,
  step: 0.1,
  unit: '',
  style: 'grayscale',
};

const SEPIA = {
  name: 'sepia',
  minValue: 0,
  maxValue: 1,
  step: 0.1,
  unit: '',
  style: 'sepia',
};

const MARVIN = {
  name: 'marvin',
  minValue: 0,
  maxValue: 100,
  step: 1,
  unit: '%',
  style: 'invert',
};

const PHOBOS = {
  name: 'phobos',
  minValue: 0,
  maxValue: 3,
  step: 0.1,
  unit: 'px',
  style: 'blur',
};

const HEAT = {
  name: 'heat',
  minValue: 1,
  maxValue: 3,
  step: 0.1,
  unit: '',
  style: 'brightness',
};

export {
  MIN_LIKES,
  MAX_LIKES,
  AVATAR_MIN_INDEX,
  AVATAR_MAX_INDEX,
  MIN_NUMBER_COMMENTS,
  MAX_NUMBER_COMMENTS,
  MAX_GENERATED_OBJECTS,
  COMMENTS_STEP,
  SCALE_STEP,
  SCALE_DEFAULT,
  MAX_SCALE,
  MIN_SCALE,
  VALID_SYMBOLS,
  MAX_HASHTAGS,
  CHROME,
  SEPIA,
  MARVIN,
  PHOBOS,
  HEAT,
};
