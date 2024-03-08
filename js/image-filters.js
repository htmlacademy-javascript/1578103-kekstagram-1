import { getRandomInteger } from './utils.js';
import { renderCards } from './show-other-photos.js';
import { MIN_INTEGER, MAX_RANDOM_PHOTOS, Filers, } from './constants.js';

const imageFilters = document.querySelector('.img-filters');
const filterList = imageFilters.querySelector('.img-filters__form');

let filterButtonId = Filers.DEFAULT;

const showImageFilters = () => imageFilters.classList.remove('img-filters--inactive');

const getRandomPhotos = (photos) => {
  const randomPhotosSet = new Set();
  randomPhotosSet.clear();
  while (randomPhotosSet.size < MAX_RANDOM_PHOTOS) {
    const randomId = getRandomInteger(MIN_INTEGER, photos.length - 1);
    const randomPhoto = photos.find((photo) => photo.id === randomId);
    randomPhotosSet.add(randomPhoto);
  }
  return [...randomPhotosSet];
};

const setFilterClick = (callback) => {
  filterList.addEventListener('click', (e) => {
    if (e.target.closest('.img-filters__button')) {
      e.preventDefault();
      filterList.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      e.target.classList.add('img-filters__button--active');
      filterButtonId = e.target.id;
      callback();
    }
  });
};

const comparePhotoComments = (photoA, photoB) => photoB.comments.length - photoA.comments.length;

const renderCardsFilters = (photos) => {
  switch (filterButtonId) {
    case Filers.DEFAULT:
      return renderCards(photos);
    case Filers.RANDOM:
      return renderCards(getRandomPhotos(photos));
    case Filers.MAX_COMMENTS:
      return renderCards(photos.slice().sort(comparePhotoComments));
  }
};

export { showImageFilters, renderCardsFilters, setFilterClick };
