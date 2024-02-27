import { isEscKey } from './utils.js';
import { clearComments, renderComments } from './comments-list.js';


const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const bigPictureClose = bigPicture.querySelector(' .big-picture__cancel ');
const body = document.querySelector('body');
const likesNumber = bigPicture.querySelector('.likes-count');
const descriptionPhoto = bigPicture.querySelector('.social__caption');
const commentCounter = bigPicture.querySelector('.social__comment-count');
const connentsNumber = commentCounter.querySelector('.comments-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');

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
  connentsNumber.textContent = comments.length;
  renderComments(comments);
};

const openFullSizeMode = (photo) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentCounter.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  renderModal(photo);
};

function closeFullSizeMode() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  clearComments();
}


bigPictureClose.addEventListener('click', () => {
  closeFullSizeMode();
});

export { openFullSizeMode };
