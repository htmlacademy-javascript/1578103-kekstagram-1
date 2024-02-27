const commentsList = document.querySelector('.social__comments');
const commentsItem = commentsList.querySelector('.social__comment');
const commentCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');

const renderComments = (comments) => {
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

// const onCommentsLoaderClick = (e) => {
//   if (e.target.closest('.comments-loader')) {
//     console.log('test');
//     showComments(numberComments, numberUploadedComments, copyComments);
//   }

// };

function showUploadedComments(numberComments, numberUploadedComments, comments) {
  const hiddenСomments = comments.length;
  console.log('l2-' + hiddenСomments);
  if (hiddenСomments >= numberUploadedComments) {
    const numberShowComments = numberComments - hiddenСomments + 5;
    if (numberShowComments === numberComments) {
      commentsLoader.classList.add('hidden');
    }
    commentCounter.textContent = `${numberShowComments} из ${numberComments} комментариев`;
    const displayedСomments = comments.splice(0, numberUploadedComments);
    renderComments(displayedСomments);
    console.log("l3-" + comments.length);

  } else {
    commentCounter.textContent = `${numberComments} из ${numberComments} комментариев`;
    commentsLoader.classList.add('hidden');
    const displayedСomments = comments.splice(0, hiddenСomments);
    renderComments(displayedСomments);
    console.log("l4-" + comments.length);
  }
}

const showСomments = (comments) => {
  clearComments();
  const numberComments = comments.length;
  console.log('lnach-' + numberComments);
  const numberUploadedComments = 5;
  if (numberComments === 0) {
    commentCounter.textContent = 'Комментриев пока нет =(';
    commentsLoader.classList.add('hidden');
  }
  if (numberComments <= numberUploadedComments) {
    commentCounter.textContent = `${numberComments} из ${numberComments} комментариев`;
    commentsLoader.classList.add('hidden');
    renderComments(comments);
  }
  if (numberComments > numberUploadedComments) {
    commentCounter.textContent = `${numberUploadedComments} из ${numberComments} комментариев`;
    const copyComments = comments.slice();
    const displayedСomments = copyComments.splice(0, numberUploadedComments);
    renderComments(displayedСomments);
    console.log('l1-' + copyComments.length);
    commentsLoader.addEventListener('click', (e) => {
      if (e.target.closest('.comments-loader')) {
        showUploadedComments(numberComments, numberUploadedComments, copyComments);
      }
    });
  }
};

function clearComments() {
  commentsList.innerHTML = '';
  commentCounter.textContent = '';
  commentsLoader.classList.remove('hidden');
}

export { clearComments, showСomments };
