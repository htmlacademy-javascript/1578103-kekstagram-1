import { SCALE_STEP, SCALE_DEFAULT, MAX_SCALE, MIN_SCALE } from './constants.js';

const scaleDown = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scaleUp = document.querySelector('.scale__control--bigger');
const previewImage = document.querySelector('.img-upload__preview img');

let scale = SCALE_DEFAULT;

const setStatusScaleButton = () => {
  scaleUp.disabled = scale === MAX_SCALE;
  scaleDown.disabled = scale === MIN_SCALE;
};

const renderScale = () => {
  scaleValue.value = `${scale * 100}%`;
  previewImage.style.transform = `scale(${scale})`;
  setStatusScaleButton();
};

const onScaleUpClick = () => {
  scale += (scale + SCALE_STEP <= MAX_SCALE) ? SCALE_STEP : 0;
  renderScale();
};

const onScaleDowClick = () => {
  scale -= (scale - SCALE_STEP >= MIN_SCALE) ? SCALE_STEP : 0;
  renderScale();
};

scaleUp.addEventListener('click', onScaleUpClick);
scaleDown.addEventListener('click', onScaleDowClick);

const resetScale = () => {
  scale = SCALE_DEFAULT;
  renderScale();
};

export { resetScale };
