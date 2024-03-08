import { COMMENTS_STEP, NO_COMMENTS } from './constants.js';

const commentsList = document.querySelector('.social__comments');
const commentItemTemplate = commentsList.querySelector('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

let counter = 0;
let total = 0;

const copyComments = [];

const renderComment = ({ avatar, message, name }) => {
  const commentItem = commentItemTemplate.cloneNode(true);
  commentItem.querySelector('.social__picture').src = avatar;
  commentItem.querySelector('.social__picture').alt = name;
  commentItem.querySelector('.social__text').textContent = message;

  counter++;
  return commentItem;
};

const renderStatistic = () => {
  commentCounter.textContent = `${counter} из ${total} комментариев`;
};

const renderLoader = () => {
  if (copyComments.length) {
    commentsLoader.classList.remove('hidden');
  } else {
    commentsLoader.classList.add('hidden');
  }
};

const renderComments = () => {
  const commentsFragment = document.createDocumentFragment();
  copyComments.splice(0, COMMENTS_STEP).forEach((item) => {
    commentsFragment.append(renderComment(item));
  });

  commentsList.append(commentsFragment);
  renderLoader();
  renderStatistic();
};

const showСomments = (comments) => {
  counter = 0;
  clearComments();
  if (!comments.length) {
    commentCounter.textContent = NO_COMMENTS;
  } else {
    total = comments.length;
    copyComments.length = 0;
    copyComments.push(...comments.slice());
    renderComments();
  }
};

commentsLoader.addEventListener('click', () => {
  renderComments();
});

function clearComments() {
  commentsList.innerHTML = '';
  commentCounter.textContent = '';
  commentsLoader.classList.add('hidden');
}

export { clearComments, showСomments };
