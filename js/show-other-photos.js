// const otherPhoto = document.querySelector('.pictures');
const otherPhotoTemplate = document.querySelector('#picture').content.querySelector('.picture');

const otherPhotoFragment = document.createDocumentFragment();

const getotherPhotos = (otherPhotos) => {
  otherPhotos.forEach(({ url, description, comments, likes }) => {
    const otherPhotoElement = otherPhotoTemplate.cloneNode(true);
    otherPhotoElement.querySelector('.picture__img').src = url;
    otherPhotoElement.querySelector('.picture__img').alt = description;
    otherPhotoElement.querySelector('.picture__comments').textContent = comments.length;
    otherPhotoElement.querySelector('.picture__likes').textContent = likes;
    otherPhotoFragment.append(otherPhotoElement);
  });
};
//otherPhoto.append(otherPhotoFragment);

export { getotherPhotos, otherPhotoFragment };
