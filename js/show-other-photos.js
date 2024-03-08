import { openFullSizeMode } from './full-size-mode.js';

const otherPhoto = document.querySelector('.pictures');
const otherPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');
const photos = [];
let focusPhoto = 0;

const renderCards = (otherPhotos) => {
  photos.length = 0;
  otherPhoto.querySelectorAll('.picture').forEach((photo) => photo.remove());
  photos.push(...otherPhotos);
  const otherPhotoFragment = document.createDocumentFragment();
  otherPhotos.forEach(({ id, url, description, comments, likes }) => {
    const otherPhotoElement = otherPhotoTemplate.cloneNode(true);
    otherPhotoElement.dataset.id = id;
    otherPhotoElement.querySelector('.picture__img').src = url;
    otherPhotoElement.querySelector('.picture__img').alt = description;
    otherPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    otherPhotoElement.querySelector('.picture__likes').textContent = likes;
    otherPhotoFragment.append(otherPhotoElement);
  });
  otherPhoto.append(otherPhotoFragment);
};

const getPhotoDescription = (photosArray, photoId) => photosArray.find((photo) => photo.id === photoId);

otherPhoto.addEventListener('click', (e) => {
  if (e.target.closest('.picture')) {
    const id = Number(e.target.closest('.picture').dataset.id);
    const photo = getPhotoDescription(photos, id);
    openFullSizeMode(photo);
    focusPhoto = e.target.closest('.picture');
  }
});

export { renderCards, focusPhoto };
