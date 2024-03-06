import { renderCards } from './show-other-photos.js';
import './form.js';
import { getData } from './api.js';

getData()
  .then((photos) => {
    renderCards(photos);
  });

