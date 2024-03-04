import { CHROME, SEPIA, MARVIN, PHOBOS, HEAT } from './constants.js';

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectValue = effectLevel.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');

const effects = [CHROME, SEPIA, MARVIN, PHOBOS, HEAT];
let efectParameters = {};

// let minRange = 0; Мжно обойтись без данныъ параметров?
// let maxRange = 1;
// let step = 0.1;

noUiSlider.create(sliderElement, {
  range: {
    min: 0, // minRange, Стартовые параметры могут быть любыми?
    max: 1, // maxRange,
  },
  start: 1, // maxRange,
  step: 0.1, // step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetEffect = () => {
  image.removeAttribute('class');
  image.style.filter = 'none';
  effectValue.value = '';
  sliderElement.setAttribute('disabled', true);
  effectLevel.classList.add('hidden');
};

const getEfectParameters = (effectsArray, effectName) => effectsArray.find((effect) => effect.name === effectName);

const getSliderUpdate = ({ minValue, maxValue, step, style, unit }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: maxValue,
    step: step,
  });
  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    image.style.filter = `${style}(${effectValue.value}${unit})`;
  });
};

effectsList.addEventListener('change', (e) => {
  if (e.target.closest('.effects__radio')) {

    if (e.target.value !== 'none') {
      resetEffect();
      sliderElement.removeAttribute('disabled');
      effectLevel.classList.remove('hidden');
      image.removeAttribute('class');
      image.classList.add(`effects__preview--${e.target.value}`);
      efectParameters = getEfectParameters(effects, e.target.value);
      getSliderUpdate(efectParameters);
    } else {
      resetEffect();
    }
  }
});

export { resetEffect };
