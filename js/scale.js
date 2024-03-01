import { SCALE_STEP, SCALE_DEFAULT, MAX_SCALE, MIN_SCALE } from "./constants.js";

const scaleDownButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scaleUpButton = document.querySelector('.scale__control--bigger');
const previewImage = document.querySelector('.img-upload__preview img');

let scale = SCALE_DEFAULT;

const getStatusScaleButton = () => {
  if (scale === MAX_SCALE) {
    scaleUpButton.disabled = true;
    scaleUpButton.style.opacity = '0.4';
  }
  if (scale === MIN_SCALE) {
    scaleDownButton.disabled = true;
    scaleDownButton.style.opacity = '0.4';
  }
};

const scaleUp = () => {
  scale += (scale + SCALE_STEP <= MAX_SCALE) ? SCALE_STEP : 0;
  scaleValue.value = `${scale * 100}%`;
  previewImage.style.transform = `scale(${scale})`;
};
// const changeScaleImage = (scale) => {
//   const scaleLevel = parseInt(scale.value) / 100;
//   previewImage.style.transform = `scale(${scaleLevel})`;
// };

// if (parseInt(scale.value) === 0) {
//   smaller.disabled = true;
//   smaller.style.opacity = '0.4';
// }

// const onBiggerClick = () => {
//   if (parseInt(scale.value) === 100) {
//     bigger.disabled = true;
//     bigger.style.opacity = '0.4';
//   }

// }
export { getStatusScaleButton, scaleUp };
