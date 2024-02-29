import { getArrayPhotoDescription } from './data.js';
import { renderCards } from './show-other-photos.js';
import './download-form.js';

const otherPhotos = getArrayPhotoDescription();
renderCards(otherPhotos);

