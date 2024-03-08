import { EFFECTS } from './constants.js';

const effectLevel = document.querySelector('.img-upload__effect-level');
const effectValue = effectLevel.querySelector('.effect-level__value');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const image = document.querySelector('.img-upload__preview img');

let efectParameters = {};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
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

sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
  image.style.filter = `${efectParameters.style}(${effectValue.value}${efectParameters.unit})`;
});

const resetEffect = () => {
  image.classList.remove(...image.classList);
  image.style.filter = 'none';
  effectValue.value = '';
  sliderElement.setAttribute('disabled', true);
  effectLevel.classList.add('hidden');
};

const getEfectParameters = (effectsArray, effectName) => effectsArray.find((effect) => effect.name === effectName);

const getSliderUpdate = ({ minValue, maxValue, step }) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: maxValue,
    step: step,
  });
};

effectsList.addEventListener('change', (e) => {
  if (e.target.closest('.effects__radio')) {
    resetEffect();
    if (e.target.value !== 'none') {
      sliderElement.removeAttribute('disabled');
      effectLevel.classList.remove('hidden');
      image.classList.add(`effects__preview--${e.target.value}`);
      efectParameters = getEfectParameters(EFFECTS, e.target.value);
      getSliderUpdate(efectParameters);
    }
  }
});

export { resetEffect };
