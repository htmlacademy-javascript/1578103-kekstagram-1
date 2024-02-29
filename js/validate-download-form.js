const form = document.querySelector('#upload-select-image');
const imageDescription = form.querySelector('.text__description');
const imageHashtag = form.querySelector('.text__hashtags');


const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__error'
});

const hashtag = /^#/;

const validateHashtag = (value) => String(value).match(hashtag);

pristine.addValidator(imageHashtag, validateHashtag, 'Первый символ #');

const validateDescription = (value) => value.length <= 140;

pristine.addValidator(imageDescription, validateDescription, 'Не более 140 символов');

function resetPristine() {
  pristine.reset();
}

form.addEventListener('submit', (e) => {
  if (!pristine.validate()) {
    e.preventDefault();
  }
});

export { resetPristine };
