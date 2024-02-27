const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');


const renderComments = (comments) => {
  clearComments();
  const commentsFragment = document.createDocumentFragment();
  comments.forEach(({ avatar, message, name }) => {
    const commentsItemTemplate = commentsItem.cloneNode(true);
    commentsItemTemplate.querySelector('.social__picture').src = avatar;
    commentsItemTemplate.querySelector('.social__picture').alt = name;
    commentsItemTemplate.querySelector('.social__text').textContent = message;
    commentsFragment.append(commentsItemTemplate);
  });
  commentsList.append(commentsFragment);
};

function clearComments() {
  commentsList.innerHTML = '';
}

export { clearComments, renderComments };
