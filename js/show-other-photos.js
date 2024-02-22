import { getArrayPhotoDescription } from './data.js';

const otherPhoto = document.querySelector('.pictures');
const otherPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherPhotos = getArrayPhotoDescription();

const otherPhotoFragment = document.createDocumentFragment();

otherPhotos.forEach(({ url, description, comments, likes }) => {
  const otherPhotoElement = otherPhotoTemplate.cloneNode(true);
  otherPhotoElement.querySelector('.picture__img').src = url;
  otherPhotoElement.querySelector('.picture__img').alt = description;
  otherPhotoElement.querySelector('.picture__comments').textContent = comments.length;
  otherPhotoElement.querySelector('.picture__likes').textContent = likes;
  otherPhotoFragment.append(otherPhotoElement);
});


otherPhoto.append(otherPhotoFragment);
