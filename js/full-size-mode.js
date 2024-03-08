import { isEscKey } from './utils.js';
import { focusPhoto } from './show-other-photos.js';
import { clearComments, showСomments } from './comments-list.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureClose = bigPicture.querySelector(' .big-picture__cancel ');
const body = document.querySelector('body');
const likesNumber = bigPicture.querySelector('.likes-count');
const descriptionPhoto = bigPicture.querySelector('.social__caption');

const onDocumentKeydown = (e) => {
  if (isEscKey(e)) {
    e.preventDefault();
    closeFullSizeMode();
  }
};

const renderModal = ({ url, description, likes, comments }) => {
  bigPictureImg.src = url;
  likesNumber.textContent = likes;
  descriptionPhoto.textContent = description;
  showСomments(comments);
};

const openFullSizeMode = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureImg.focus();
  renderModal(photo);
};

function closeFullSizeMode() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearComments();
  focusPhoto.focus();
}

bigPictureClose.addEventListener('click', () => {
  closeFullSizeMode();
});

export { openFullSizeMode };
