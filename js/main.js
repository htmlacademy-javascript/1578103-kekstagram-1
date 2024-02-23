import { createIdGenerator, getRandomInteger, getRandomArrayElement } from './utils.js';
import { MIN_LIKES, MAX_LIKES, AVATAR_MIN_INDEX, AVATAR_MAX_INDEX, MIN_NUMBER_COMMENTS, MAX_NUMBER_COMMENTS, MAX_GENERATED_OBJECTS } from './data-generation-constants.js';
import { getArrayPhotoDescription } from './data.js';
import { getotherPhotos, otherPhotoFragment } from './show-other-photos.js';


// Генерирует данные из utils.js
const createPhotoId = createIdGenerator();
const createPhotoUrl = createIdGenerator();
const createCommentId = createIdGenerator();
const otherPhotos = getArrayPhotoDescription();
const otherPhoto = document.querySelector('.pictures');

getotherPhotos(otherPhotos);

console.log(otherPhotoFragment);

otherPhoto.append(otherPhotoFragment);


export {
  getRandomInteger,
  getRandomArrayElement,
  createPhotoId,
  createPhotoUrl,
  createCommentId,
  MIN_LIKES,
  MAX_LIKES,
  AVATAR_MIN_INDEX,
  AVATAR_MAX_INDEX,
  MIN_NUMBER_COMMENTS,
  MAX_NUMBER_COMMENTS,
  MAX_GENERATED_OBJECTS
};
